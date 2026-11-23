// Entry: "Six Words, One Story" (u-deranalabs-six-words-one-story-f982e410).
//
// The chosen line — "He buried the hatchet. Beside her." — is a complete
// six-word story built on one turn:
//   - setup: "He buried the hatchet" — the familiar idiom for making peace.
//   - turn: "Beside her." — the idiom turns literal and graveside: the peace
//     was made too late, beside her grave (or beside her, where the hatchet
//     itself is buried). Either reading is a whole life implied in two words.
//   - unsaid: whether she is dead, whether he killed her, whether the feud
//     outlived her — the reader fills that in; the line never spells it out.
//   - every word earns its place: no adjective, no filler, two short
//     sentences with a clean spoken rhythm.
// The text is deterministic, network-free, and byte-identical on every run:
// 6 words, 34 characters, one line, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const setup = "He buried the hatchet.";
const turn = "Beside her.";

const text = `${setup} ${turn}`;

// Guard: the gate requires 1–60 characters and the brief requires exactly
// six words. If any future edit changes the wording, fail loudly instead of
// silently submitting a different line.
const words = text.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`entry must be exactly 6 words, got ${words.length}`);
}
if ([...text].length > 60 || [...text].length < 1) {
  throw new Error(`entry must be 1-60 characters, got ${[...text].length}`);
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
