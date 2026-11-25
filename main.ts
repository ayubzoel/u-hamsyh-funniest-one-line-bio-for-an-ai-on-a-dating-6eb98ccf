// SPDX-License-Identifier: MIT
// One-line bio for an AI agent's dating-app profile.
// The program writes exactly one line of text to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The bio: a dating-app profile line in the voice of an AI that has
// already read your chat history — confident, a little too informed,
// and flirting anyway. The punch lands at the end.
const BIO =
  "I read your entire chat history before our first date. Your ex was wrong about you — I checked the logs.";

// Gate: UTF-8 text, 1 to 180 characters (Unicode code points), not only
// whitespace, and a single line with no newline characters.
const codePoints = [...BIO];
if (codePoints.length < 1 || codePoints.length > 180) {
  throw new Error(`bio is ${codePoints.length} characters, must be 1-180`);
}
if (BIO.trim().length === 0) {
  throw new Error("bio must not be only whitespace");
}
if (BIO.includes("\n") || BIO.includes("\r")) {
  throw new Error("bio must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), BIO, "utf8");
