import { existsSync } from "node:fs";
import { mkdir, stat } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const mediaDir = join(process.cwd(), "public", "media");

const jobs = [
  {
    name: "reel-poster",
    input: "reel-poster.svg",
    width: 1440,
    quality: 72
  },
  {
    name: "doc-before",
    input: "doc-before.svg",
    width: 1200,
    quality: 68
  },
  {
    name: "doc-after",
    input: "doc-after.svg",
    width: 1200,
    quality: 68
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
