// The Vacuum's Alibi: one line in which a robot vacuum explains why it missed a spot.
// Node 22 standard library only: no dependencies, no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I left one crumb as a control sample: science demands a baseline, and my battery demands a nap.";

if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1 to 200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
