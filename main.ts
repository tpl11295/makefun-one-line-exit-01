// The One-Line Exit — a single-line resignation letter, 1 to 140 characters.
// It has to read like a letter someone could actually send, with the joke landing in that one line.
// Fresh angle: the office printer got promoted above the employee.
import * as fs from "node:fs";

const LINE =
  "I hereby resign, because the printer just got promoted to management and I refuse to take orders from a machine that jams under pressure.";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
