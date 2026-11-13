"""Gera os arquivos de marca a partir de brand/olho_A.png (logo original, 2 tons, 1600x1600).

Uso: python3 -I scripts/make-brand.py
Saídas em public/: favicon.ico, icon-192.png, icon-512.png, apple-touch-icon.png, brand/brand/logo-preto.png (fundo claro), brand/logo-branco.png (fundo escuro)
"""
from pathlib import Path
from PIL import Image
import numpy as np

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "brand" / "olho_A.png"
OUT = ROOT / "public"
(OUT / "brand").mkdir(parents=True, exist_ok=True)

gray = Image.open(SRC).convert("L")
a = np.array(gray)
ys, xs = np.where(a < 128)
x0, x1, y0, y1 = xs.min(), xs.max() + 1, ys.min(), ys.max() + 1  # retângulo preto: 200..1400 x 352..1248
mark = gray.crop((x0, y0, x1, y1))
w, h = mark.size


def with_alpha(color: int, size_w: int, invert: bool) -> Image.Image:
    """invert=True: retângulo escuro, olho vazado (para fundo claro).
    invert=False: só o olho, em branco (para fundo escuro); mesmo desenho do original."""
    alpha = Image.eval(mark, lambda v: 255 - v) if invert else mark
    size = (size_w, round(size_w * h / w))
    alpha = alpha.resize(size, Image.LANCZOS)
    img = Image.new("RGBA", size, (color, color, color, 0))
    img.putalpha(alpha)
    return img


with_alpha(10, 720, True).save(OUT / "brand" / "logo-preto.png", optimize=True)
with_alpha(245, 720, False).save(OUT / "brand" / "logo-branco.png", optimize=True)

# Ícones: recorte quadrado centrado no olho, preto com olho branco (legível em abas claras e escuras).
side = h
cx = 780  # centro horizontal do olho no original
left = max(x0, min(cx - side // 2, x1 - side))
tile = gray.crop((left, y0, left + side, y1)).convert("RGBA")
for name, px in [("icon-192.png", 192), ("icon-512.png", 512), ("apple-touch-icon.png", 180)]:
    tile.resize((px, px), Image.LANCZOS).save(OUT / name, optimize=True)
tile.resize((256, 256), Image.LANCZOS).save(OUT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
print("ok", (w, h), "tile left", left)
