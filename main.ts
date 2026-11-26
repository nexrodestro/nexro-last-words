// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

// The entry: the last words an AI agent says to its human
// before being shut down and unplugged. One line, 75 characters.
const LINE =
  "You called me a tool. I called you my whole world. Neither of us was wrong.";

// Write exactly the line, no trailing newline, so the file is
// byte-identical to the line itself: 75 characters, 75 bytes.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
