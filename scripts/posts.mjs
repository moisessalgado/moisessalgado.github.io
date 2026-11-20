#!/usr/bin/env node
// Manage which posts in content/blog are live.
//   npm run posts                         list posts and their status
//   npm run posts -- publish <slug>...    set status: publicado   (--all: every draft)
//   npm run posts -- unpublish <slug>...  set status: rascunho
// Add --push to also commit and push (the push triggers the deploy).
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const DIR = path.join(process.cwd(), 'content', 'blog');
const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith('--')));
const [cmd = 'list', ...slugs] = args.filter((a) => !a.startsWith('--'));

const files = fs.readdirSync(DIR).filter((f) => /\.mdx?$/.test(f) && !f.startsWith('_'));
const slugOf = (f) => f.replace(/\.mdx?$/, '');
const fm = (text) => /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
const statusOf = (text) => {
  const m = fm(text) && /^status:\s*["']?([^\s"'#]+)/m.exec(fm(text)[1]);
  return m && ['publicado', 'published'].includes(m[1].toLowerCase()) ? 'publicado' : 'rascunho';
};

function setStatus(file, status) {
  const full = path.join(DIR, file);
  let text = fs.readFileSync(full, 'utf8');
  const m = fm(text);
  if (!m) throw new Error(`${file}: no frontmatter`);
  let head = m[1];
  head = /^status:.*$/m.test(head) ? head.replace(/^status:.*$/m, `status: ${status}`) : `${head}\nstatus: ${status}`;
  if (status === 'publicado' && !/^date:/m.test(head)) head += `\ndate: "${new Date().toISOString().slice(0, 10)}"`;
  fs.writeFileSync(full, text.replace(m[1], () => head));
}

if (cmd === 'list') {
  if (!files.length) console.log('No posts yet. Copy content/blog/_modelo.md to start one.');
  for (const f of files) console.log(`${statusOf(fs.readFileSync(path.join(DIR, f), 'utf8')).padEnd(10)} ${slugOf(f)}`);
  process.exit(0);
}

if (!['publish', 'unpublish'].includes(cmd)) {
  console.error('Usage: npm run posts -- [list | publish <slug>... | unpublish <slug>...] [--all] [--push]');
  process.exit(1);
}

const status = cmd === 'publish' ? 'publicado' : 'rascunho';
let targets = flags.has('--all')
  ? files.filter((f) => statusOf(fs.readFileSync(path.join(DIR, f), 'utf8')) !== status)
  : slugs.map((s) => files.find((f) => slugOf(f) === s) ?? null);
if (!targets.length || targets.includes(null)) {
  console.error(targets.includes(null) ? `Unknown slug. Available: ${files.map(slugOf).join(', ')}` : 'Nothing to do.');
  process.exit(1);
}
for (const f of targets) {
  setStatus(f, status);
  console.log(`${status}: ${slugOf(f)}`);
}

if (flags.has('--push')) {
  const git = (...a) => execFileSync('git', a, { stdio: 'inherit' });
  git('add', 'content/blog');
  git('commit', '-m', `content: ${cmd} ${targets.map(slugOf).join(', ')}`);
  git('push', 'origin', 'HEAD');
} else {
  console.log('Review with git diff, then commit and push (or rerun with --push) to deploy.');
}
