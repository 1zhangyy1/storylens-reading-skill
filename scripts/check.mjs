import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredFiles = [
  "README.md",
  "SKILL.md",
  "LICENSE",
  "ATTRIBUTIONS.md",
  "storylens-core.md",
  "flow/core.md",
  "flow/image-prompt.md",
  "flow/reading.md",
  "data/item-bank.v0.1.json",
  "data/image-manifest.v0.1.json",
  "templates/material-packet.md",
  "templates/reading-report.md",
  "templates/share-card.md",
  "examples/maya.md",
];

const forbiddenPatterns = [
  /api[_-]?key/i,
  /client_secret/i,
  /password/i,
  /cfut_[A-Za-z0-9_-]+/,
  /phx_[A-Za-z0-9_-]+/,
  /phc_[A-Za-z0-9_-]+/,
  /re_[A-Za-z0-9_-]{16,}/,
];

const imageMetadataPatterns = [
  /Department/i,
  /Canon/i,
  /Stephen/i,
  /O'Brien/i,
  /2011/,
  /Pete/i,
  /EXIF/i,
  /Exif/i,
  /Flickr/i,
  /Copyright/i,
  /DFID/i,
];

const secretScanExemptions = new Set([
  "OPEN_SOURCE_CHECKLIST.md",
  path.join("scripts", "check.mjs"),
]);

let failed = false;

function fail(message) {
  failed = true;
  console.error(`FAIL ${message}`);
}

function pass(message) {
  console.log(`OK   ${message}`);
}

for (const file of requiredFiles) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) fail(`missing required file: ${file}`);
  else pass(`found ${file}`);
}

const itemBank = readJson("data/item-bank.v0.1.json");
const imageManifest = readJson("data/image-manifest.v0.1.json");

if (itemBank) {
  if (!Array.isArray(itemBank.items) || itemBank.items.length !== 10) {
    fail("item bank should contain exactly 10 core prompts");
  } else {
    pass("item bank has 10 core prompts");
  }
}

if (imageManifest) {
  const images = [...(imageManifest.images || []), ...(imageManifest.shareExamples || [])];
  for (const item of images) {
    const localPath = item.localPath;
    if (!localPath) {
      fail(`image manifest entry ${item.id || "(unknown)"} has no localPath`);
      continue;
    }
    const resolved = path.normalize(path.join(root, "data", localPath));
    if (!fs.existsSync(resolved)) {
      fail(`missing image for ${item.id}: ${localPath}`);
    } else {
      pass(`image exists for ${item.id}: ${localPath}`);
    }
  }
}

for (const file of walk(root)) {
  if (file.includes(`${path.sep}.git${path.sep}`) || file.includes(`${path.sep}node_modules${path.sep}`)) continue;
  const relative = path.relative(root, file);
  const ext = path.extname(file).toLowerCase();
  const bytes = fs.readFileSync(file);

  if ([".md", ".json", ".mjs", ".yml", ".yaml", ".txt"].includes(ext) && !secretScanExemptions.has(relative)) {
    const text = bytes.toString("utf8");
    for (const pattern of forbiddenPatterns) {
      if (pattern.test(text)) fail(`possible secret pattern in ${relative}: ${pattern}`);
    }
  }

  if ([".jpg", ".jpeg"].includes(ext)) {
    const ascii = bytes.toString("latin1");
    for (const pattern of imageMetadataPatterns) {
      if (pattern.test(ascii)) fail(`possible embedded image metadata in ${relative}: ${pattern}`);
    }
  }
}

if (failed) {
  process.exitCode = 1;
} else {
  pass("package checks passed");
}

function readJson(relativePath) {
  try {
    const payload = JSON.parse(fs.readFileSync(path.join(root, relativePath), "utf8"));
    pass(`valid JSON ${relativePath}`);
    return payload;
  } catch (error) {
    fail(`invalid JSON ${relativePath}: ${error.message}`);
    return null;
  }
}

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else if (entry.isFile()) {
      yield fullPath;
    }
  }
}
