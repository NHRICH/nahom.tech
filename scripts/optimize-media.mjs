import { existsSync } from "node:fs";
import { mkdir, stat } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const mediaDir = join(process.cwd(), "public", "media");

const jobs = [
  {
    name: "hero-poster",
    input: "hero-poster.svg",
    width: 1920,
    quality: 64
  },
  {
    name: "work-01",
    input: "work-01.svg",
    width: 540,
    quality: 62
  },
  {
    name: "work-02",
    input: "work-02.svg",
    width: 540,
    quality: 62
  },
  {
    name: "work-03",
    input: "work-03.svg",
    width: 540,
    quality: 62
  },
  {
    name: "work-04",
    input: "work-04.svg",
    width: 540,
    quality: 62
  }
];

async function ensureMediaDir() {
  await mkdir(mediaDir, { recursive: true });
}

async function optimizeAsset({ name, input, width, quality }) {
  const inputPath = join(mediaDir, input);

  if (!existsSync(inputPath)) {
    console.warn(`[media:optimize] Skipping ${input}; file not found.`);
    return;
  }

  const image = sharp(inputPath).resize({
    width,
    fit: "inside",
    withoutEnlargement: true
  });

  const avifPath = join(mediaDir, `${name}.avif`);
  const webpPath = join(mediaDir, `${name}.webp`);

  await image.clone().avif({ quality, effort: 4 }).toFile(avifPath);
  await image.clone().webp({ quality, effort: 4 }).toFile(webpPath);

  const [inputStats, avifStats, webpStats] = await Promise.all([
    stat(inputPath),
    stat(avifPath),
    stat(webpPath)
  ]);

  const toKb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

  console.log(
    `[media:optimize] ${name}: ${toKb(inputStats.size)} -> avif ${toKb(avifStats.size)}, webp ${toKb(webpStats.size)}`
  );
}

await ensureMediaDir();

for (const job of jobs) {
  await optimizeAsset(job);
}
