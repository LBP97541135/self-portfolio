from __future__ import annotations

import argparse
import string
from pathlib import Path

from fontTools import subset


ROOT = Path(__file__).resolve().parents[1]
TEXT_SOURCES = [
    ROOT / "content.js",
    ROOT / "index.html",
    ROOT / "project.html",
    ROOT / "app.js",
    ROOT / "project.js",
    ROOT / "README.md",
]


def collect_text() -> str:
    text = "".join(path.read_text(encoding="utf-8") for path in TEXT_SOURCES)
    text += string.printable
    return "".join(sorted(set(text)))


def build_font(source: Path, destination: Path, text: str) -> None:
    options = subset.Options()
    options.flavor = "woff2"
    options.layout_features = ["*"]
    options.name_IDs = ["*"]
    options.name_legacy = True
    options.name_languages = ["*"]
    options.notdef_glyph = True
    options.notdef_outline = True
    options.recommended_glyphs = True
    options.hinting = False

    font = subset.load_font(str(source), options)
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(text=text)
    subsetter.subset(font)
    destination.parent.mkdir(parents=True, exist_ok=True)
    subset.save_font(font, str(destination), options)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source_dir", type=Path)
    args = parser.parse_args()

    text = collect_text()
    fonts = {
        "NotoSansSC.ttf": "NotoSansSC-Portfolio.woff2",
        "NotoSerifSC.ttf": "NotoSerifSC-Portfolio.woff2",
        "JetBrainsMono.ttf": "JetBrainsMono-Portfolio.woff2",
    }
    for source_name, output_name in fonts.items():
        source = args.source_dir / source_name
        destination = ROOT / "assets" / "fonts" / output_name
        build_font(source, destination, text)
        print(f"{output_name}: {destination.stat().st_size} bytes")


if __name__ == "__main__":
    main()
