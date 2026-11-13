import Link from 'next/link';
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

type BaseProps<T = HTMLElement> = HTMLAttributes<T> & { children?: ReactNode };

function H2({ children, ...props }: BaseProps<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl dark:text-paper-light mt-16 mb-5 scroll-mt-24 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-1 before:rounded-full before:bg-ink dark:before:bg-paper-light"
    >
      {children}
    </h2>
  );
}

function H3({ children, ...props }: BaseProps<HTMLHeadingElement>) {
  return (
    <h3
      {...props}
      className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl dark:text-paper-light mt-10 mb-3 scroll-mt-24"
    >
      {children}
    </h3>
  );
}

function H4({ children, ...props }: BaseProps<HTMLHeadingElement>) {
  return (
    <h4
      {...props}
      className="font-display text-lg font-semibold tracking-tight text-ink dark:text-paper-light mt-8 mb-2"
    >
      {children}
    </h4>
  );
}

function P({ children, ...props }: BaseProps<HTMLParagraphElement>) {
  return (
    <p
      {...props}
      className="my-5 text-base leading-[1.8] text-ink-700 dark:text-paper-light/90"
    >
      {children}
    </p>
  );
}

function UL({ children, ...props }: BaseProps<HTMLUListElement>) {
  return (
    <ul
      {...props}
      className="my-5 space-y-2 pl-5 list-disc marker:text-ink dark:marker:text-paper-light text-ink-700 dark:text-paper-light/90 leading-relaxed"
    >
      {children}
    </ul>
  );
}

function OL({ children, ...props }: BaseProps<HTMLOListElement>) {
  return (
    <ol
      {...props}
      className="my-5 space-y-2 pl-5 list-decimal marker:text-ink dark:marker:text-paper-light marker:font-semibold text-ink-700 dark:text-paper-light/90 leading-relaxed"
    >
      {children}
    </ol>
  );
}

function LI({ children, ...props }: BaseProps<HTMLLIElement>) {
  return (
    <li {...props} className="pl-1">
      {children}
    </li>
  );
}

function Blockquote({ children, ...props }: BaseProps<HTMLQuoteElement>) {
  return (
    <blockquote
      {...props}
      className="my-8 border-l-4 border-ink bg-paper-light/60 dark:bg-ink-700/50 dark:border-paper-light pl-5 pr-4 py-4 rounded-r-lg text-ink-700 dark:text-paper-light italic font-medium [&>p]:my-0 [&>p]:text-base"
    >
      {children}
    </blockquote>
  );
}

function HR(props: HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      {...props}
      className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent dark:via-paper-light/20"
    />
  );
}

function A({ href = '#', children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = /^https?:\/\//i.test(href);
  const classes =
    'font-medium text-ink hover:text-ink-600 dark:text-paper-light dark:hover:text-paper-dark underline underline-offset-4 decoration-ink/40 hover:decoration-ink dark:decoration-paper-light/40 dark:hover:decoration-paper-light transition-colors break-words';
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

function Strong({ children, ...props }: BaseProps<HTMLElement>) {
  return (
    <strong {...props} className="font-semibold text-ink dark:text-paper-light">
      {children}
    </strong>
  );
}

function Em({ children, ...props }: BaseProps<HTMLElement>) {
  return (
    <em {...props} className="italic text-ink-700 dark:text-paper-light/90">
      {children}
    </em>
  );
}

function InlineCode({ children, ...props }: BaseProps<HTMLElement>) {
  return (
    <code
      {...props}
      className="rounded bg-paper-light dark:bg-ink-700 px-1.5 py-0.5 text-[0.9em] font-mono text-ink-600 dark:text-paper-light border border-ink/5 dark:border-paper-light/10"
    >
      {children}
    </code>
  );
}

function Pre({ children, ...props }: BaseProps<HTMLPreElement>) {
  return (
    <pre
      {...props}
      className="my-6 overflow-x-auto rounded-xl bg-ink text-paper-light p-5 text-sm leading-relaxed font-mono dark:bg-ink-900 border border-ink/10 dark:border-paper-light/10 [&>code]:bg-transparent [&>code]:p-0 [&>code]:border-0 [&>code]:text-paper-light"
    >
      {children}
    </pre>
  );
}

export const mdxComponents = {
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  ul: UL,
  ol: OL,
  li: LI,
  blockquote: Blockquote,
  hr: HR,
  a: A,
  strong: Strong,
  em: Em,
  code: InlineCode,
  pre: Pre,
};
