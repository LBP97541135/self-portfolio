from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


SIZE = (1280, 720)
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "project-covers"


def crop_fill(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    target_ratio = size[0] / size[1]
    source_ratio = image.width / image.height
    if source_ratio > target_ratio:
        width = int(image.height * target_ratio)
        left = (image.width - width) // 2
        image = image.crop((left, 0, left + width, image.height))
    else:
        height = int(image.width / target_ratio)
        top = (image.height - height) // 2
        image = image.crop((0, top, image.width, top + height))
    return image.resize(size, Image.Resampling.LANCZOS)


def contain(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    image = image.copy()
    image.thumbnail(size, Image.Resampling.LANCZOS)
    return image


def rounded_panel(base: Image.Image, image: Image.Image, box: tuple[int, int, int, int], radius: int = 22) -> None:
    x, y, width, height = box
    fitted = crop_fill(image, (width, height))
    mask = Image.new("L", (width, height), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, width, height), radius=radius, fill=255)
    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle((x + 8, y + 12, x + width + 8, y + height + 12), radius=radius, fill=(58, 28, 20, 55))
    base.alpha_composite(shadow.filter(ImageFilter.GaussianBlur(10)))
    base.paste(fitted, (x, y), mask)


def build_undercover(source_root: Path, font_path: Path) -> None:
    scene = Image.open(source_root / "apps/web/src/assets/scenes/interrogation-room.png").convert("RGB")
    canvas = crop_fill(scene, SIZE).convert("RGBA")
    shade = Image.new("RGBA", SIZE, (8, 20, 29, 35))
    canvas.alpha_composite(shade)
    draw = ImageDraw.Draw(canvas)
    title_font = ImageFont.truetype(str(font_path), 54)
    label_font = ImageFont.truetype(str(font_path), 24)
    small_font = ImageFont.truetype(str(font_path), 17)

    draw.rounded_rectangle((52, 46, 1228, 130), radius=18, fill=(14, 27, 38, 205), outline=(143, 186, 211, 170), width=2)
    draw.text((82, 58), "谁是卧底 · 本地对局", font=title_font, fill=(240, 246, 248, 255))
    draw.text((934, 78), "Context 隔离 / 权威状态机", font=small_font, fill=(164, 205, 225, 255))

    labels = [("人类玩家", "HUMAN"), ("DeepSeek", "AGENT 01"), ("豆包", "AGENT 02"), ("千问", "AGENT 03")]
    colors = [(229, 205, 154), (112, 159, 203), (113, 191, 177), (174, 134, 205)]
    x_positions = [75, 370, 665, 960]
    for (title, sub), color, x in zip(labels, colors, x_positions):
        draw.rounded_rectangle((x, 455, x + 245, 635), radius=18, fill=(11, 24, 34, 220), outline=(*color, 255), width=3)
        draw.ellipse((x + 86, 385, x + 159, 458), fill=(*color, 255), outline=(240, 246, 248, 220), width=3)
        draw.text((x + 30, 500), title, font=label_font, fill=(245, 248, 249, 255))
        draw.text((x + 30, 556), sub, font=small_font, fill=(*color, 255))
        draw.text((x + 30, 590), "词牌私有 · 行动受控", font=small_font, fill=(178, 192, 201, 255))

    canvas.convert("RGB").save(OUT / "undercover.png", quality=94)


def build_data_platform(flow_path: Path) -> None:
    flow = Image.open(flow_path).convert("RGB")
    canvas = Image.new("RGB", SIZE, "#f4f7fb")
    fitted = contain(flow, (1180, 620))
    canvas.paste(fitted, ((SIZE[0] - fitted.width) // 2, (SIZE[1] - fitted.height) // 2))
    canvas.save(OUT / "data-collection-platform.png", quality=94)


def build_lottery(main_path: Path, result_path: Path) -> None:
    main = Image.open(main_path).convert("RGB")
    result = Image.open(result_path).convert("RGB")
    main = main.crop((0, int(main.height * 0.11), main.width, int(main.height * 0.72)))
    result = result.crop((0, int(result.height * 0.11), result.width, int(result.height * 0.72)))
    canvas = Image.new("RGBA", SIZE, "#f3c6bd")
    draw = ImageDraw.Draw(canvas)
    draw.rectangle((0, 0, 430, 720), fill="#a83328")
    draw.rectangle((430, 0, 850, 720), fill="#f7ddc4")
    draw.rectangle((850, 0, 1280, 720), fill="#e85e45")
    rounded_panel(canvas, main, (76, 35, 445, 650), radius=28)
    rounded_panel(canvas, result, (759, 35, 445, 650), radius=28)
    canvas.convert("RGB").save(OUT / "member-lottery.png", quality=94)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--undercover-root", type=Path, required=True)
    parser.add_argument("--font", type=Path, required=True)
    parser.add_argument("--data-flow", type=Path, required=True)
    parser.add_argument("--lottery-main", type=Path, required=True)
    parser.add_argument("--lottery-result", type=Path, required=True)
    args = parser.parse_args()
    OUT.mkdir(parents=True, exist_ok=True)
    build_undercover(args.undercover_root, args.font)
    build_data_platform(args.data_flow)
    build_lottery(args.lottery_main, args.lottery_result)


if __name__ == "__main__":
    main()
