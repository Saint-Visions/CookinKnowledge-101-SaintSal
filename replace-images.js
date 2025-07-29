#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Image mapping: Builder.io URL -> Local path
const imageMap = {
  // Main logo variations
  "https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fc88eaa91ad364821b51a4fc6c47320ab?format=webp&width=80":
    "/saintvision-logo.webp",
  "https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Ffae77fcf2442491fade782e3822c0421?format=webp&width=800":
    "/saintvision-main-logo.webp",

  // Cookin' Knowledge
  "https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F6a4a7caae7d14837b20112e2ce9e5015?format=webp&width=300":
    "/cookin-knowledge.webp",

  // SV Companion
  "https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2Fdbc34a0fdf4849459b0ed2678312de82?format=webp&width=80":
    "/sv-companion.webp",

  // Supersal AI
  "https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F8c7c9578e6324915bda191428ef80ec9?format=webp&width=800":
    "/supersal-ai.webp",

  // Auth background
  "https://cdn.builder.io/api/v1/image/assets%2F2c553a9d8cf24e6eae81a4a63962c5a4%2F92c010749dfe4c8da022a5b1c11b2a37?format=webp&width=800":
    "/auth-background.webp",
};

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Replace each image URL
    for (const [builderUrl, localPath] of Object.entries(imageMap)) {
      if (content.includes(builderUrl)) {
        content = content.replaceAll(builderUrl, localPath);
        modified = true;
        console.log(`✅ Replaced image in ${filePath}: ${localPath}`);
      }
    }

    // If we made changes, write the file back
    if (modified) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`📁 Updated ${filePath}`);
    }

    return modified;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TSX files recursively
function findTsxFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      findTsxFiles(fullPath, files);
    } else if (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) {
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
console.log("🔧 Starting image URL replacement...");

const clientDir = path.join(__dirname, "client");
const tsxFiles = findTsxFiles(clientDir);

let totalModified = 0;

for (const file of tsxFiles) {
  if (processFile(file)) {
    totalModified++;
  }
}

console.log(`\n🎉 Completed! Modified ${totalModified} files.`);
console.log("✅ Your masterpiece is now ready for external deployment!");
