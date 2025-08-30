const { readdirSync, statSync, writeFileSync } = require("node:fs");
const { resolve, join } = require("node:path");
const BASE_DIR = resolve(__dirname, "../src");
const INDEX = "index.d.ts";

/**
 *
 * @param {string} path
 */
function linkTypes(path) {
  const refs = [];
  const paths = readdirSync(path);
  if (path.length === 1 && paths[0] === INDEX) return;

  for (const p of paths) {
    if (statSync(join(path, p)).isDirectory()) {
      linkTypes(join(path, p));
      refs.push(`/// <reference path="./${p}/${INDEX}" />`);
    } else {
      if (p !== INDEX && p !== "test.ts") {
        refs.push(`/// <reference path="./${p}" />`);
      }
    }
  }
  writeFileSync(join(path, INDEX), refs.join("\n"));
}

linkTypes(BASE_DIR);
