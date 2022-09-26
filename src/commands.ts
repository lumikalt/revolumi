import { randomInt } from "crypto";
import { bottom, cat, owo } from "./lib/owo";
import { lescape } from "./lib/escape";

export const gay = async (s: string) => {
  const colors = ["F66", "FC6", "CF6", "6F6", "6FC", "6CF", "66F", "C6F"];
  let timer = randomInt(8);

  return s
    .split("\n")
    .map(
      s =>
        `\$\\textsf{${Array.from(s)
          .map(lescape)
          .map(c => {
            timer = ++timer % 8;

            return `\\color{#${colors[timer]}}${c}`;
          })
          .join("")}}\$`
    )
    .join("\n");
};

export const trans = async (s: string) => {
  const colors = ["3ae", "e7b", "fff"];
  let timer = 1;

  return s
    .split("\n")
    .map(
      s =>
        `\$\\textsf{${Array.from(s)
          .map(lescape)
          .map(c => {
            ++timer;
            let color = Math.round(Math.cos(timer * (Math.PI / 2))) + 1;
            return `\\color{#${colors[color]}}${c}`;
          })
          .join("")}}\$`
    )
    .join("\n");
};

export const commands = new Map([
  ["shrug", async (_: string) =>  "¯\\\\\\_(ツ)\\_/¯"],
  ["gay", gay],
  ["trans", trans],
  ["bottom", async (s: string) => bottom(s)],
  ["owo", owo],
  ["cat", cat],
  ["owocat", async (s: string) => owo(await cat(s))]
]);
