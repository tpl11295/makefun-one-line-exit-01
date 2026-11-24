import { mkdirSync, writeFileSync } from "node:fs";

// The One-Line Exit entry — exactly one line: the funniest resignation letter.
// Judge brief: reads like a letter a person could actually send, and the joke lands in that single line.
// Chosen line: formal resignation shape, with the coffee machine out-ticketing the employee.
const LINE =
  'I hereby resign, effective immediately, because the coffee machine has filed more tickets than I have this quarter.';
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
