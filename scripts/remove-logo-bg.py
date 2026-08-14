from pathlib import Path

from PIL import Image

LOGO_DIR = Path("public/logo")
THRESHOLD = 36

PAPER = (247, 244, 238)  # #F7F4EE
INK = (28, 26, 23)  # #1C1A17
CAROTENE = (226, 87, 31)  # #E2571F
SECONDARY_LIGHT = (107, 100, 89)  # #6B6459
SECONDARY_DARK = (163, 155, 144)  # #A39B90
HAIRLINE_LIGHT = (225, 217, 200)  # #E1D9C8
HAIRLINE_DARK = (58, 52, 44)  # #3A342C
SAMPLED_PAPER = (251, 247, 240)
SAMPLED_INK = (20, 18, 16)

LIGHT_BACKGROUNDS = [PAPER, SAMPLED_PAPER]
DARK_BACKGROUNDS = [INK, SAMPLED_INK]
LIGHT_KEEP = [INK, CAROTENE, SECONDARY_LIGHT, HAIRLINE_LIGHT]
DARK_KEEP = [PAPER, CAROTENE, SECONDARY_DARK, HAIRLINE_DARK]


def dist(a: tuple[int, int, int], b: tuple[int, int, int]) -> float:
    return ((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2) ** 0.5


def nearest(rgb: tuple[int, int, int], colors: list[tuple[int, int, int]]) -> float:
    return min(dist(rgb, color) for color in colors)


def should_clear(
    rgb: tuple[int, int, int],
    backgrounds: list[tuple[int, int, int]],
    keep: list[tuple[int, int, int]],
) -> bool:
    if nearest(rgb, keep) <= 28:
        return False
    return nearest(rgb, backgrounds) <= THRESHOLD


def detect_kind(image: Image.Image) -> str:
    opaque = []
    pixels = image.load()
    width, height = image.size
    for x in (0, width // 2, width - 1):
        for y in (0, height // 2, height - 1):
            r, g, b, a = pixels[x, y]
            if a > 0:
                opaque.append((r, g, b))
    if not opaque:
        # already mostly transparent — use remaining opaque average later
        samples = []
        for y in range(0, height, max(1, height // 20)):
            for x in range(0, width, max(1, width // 20)):
                r, g, b, a = pixels[x, y]
                if a > 200:
                    samples.append((r, g, b))
        if not samples:
            return "light"
        avg = tuple(sum(c[i] for c in samples) // len(samples) for i in range(3))
        return "light" if avg[0] > 140 else "dark"

    avg = tuple(sum(c[i] for c in opaque) // len(opaque) for i in range(3))
    # After the first pass, corners are transparent. Classify by filename.
    return "light"


def process(path: Path) -> None:
    kind = "light" if "light" in path.name else "dark"
    backgrounds = LIGHT_BACKGROUNDS if kind == "light" else DARK_BACKGROUNDS
    keep = LIGHT_KEEP if kind == "light" else DARK_KEEP

    image = Image.open(path).convert("RGBA")
    pixels = image.load()
    width, height = image.size
    cleared = 0

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if a == 0:
                continue
            if should_clear((r, g, b), backgrounds, keep):
                pixels[x, y] = (r, g, b, 0)
                cleared += 1

    image.save(path, "PNG")
    print(f"{path.name}: cleared {cleared} {kind} pixels")


def main() -> None:
    for path in sorted(LOGO_DIR.glob("*.png")):
        process(path)


if __name__ == "__main__":
    main()
