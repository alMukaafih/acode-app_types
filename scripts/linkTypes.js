const { readdirSync, statSync, writeFileSync } = require("node:fs");
const { resolve, join } = require("node:path");
const BASE_DIR = resolve(__dirname, "../src");

/**
 *
 * @param {string} path
 */
function linkTypes(path) {
  let refs = []
  for (const p of readdirSync(path)) {
    if (statSync(join(path, p)).isDirectory()) {
      linkTypes(join(path, p))
      refs.push(`/// <reference path="./${p}/index.d.ts" />`)
    } else {
      if (p !== "index.d.ts" && p !== "test.ts") {
        refs.push(`/// <reference path="./${p}" />`)
      }
    }
  }
  writeFileSync(join(path, "index.d.ts"), refs.join("\n"))
}

linkTypes(BASE_DIR)
