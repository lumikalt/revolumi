import { bottom, cat, owo } from "./lib/owo";
import { lescape } from "./lib/escape";
import chroma from 'chroma-js';

const gradient = (start: string, end: string, length: number) => {
  const colors: string[] = [];

  for (let i = 1; i <= length; i++) {
    colors.push(chroma.mix(start, end, i / length).hex('rgb'));
  }

  return colors;
}

const gay = async (s: string) => {
  const steps = 360 / s.length;
  let i = 0;

  return s
    .split("\n")
    .map(
      s =>
        `\$\\textsf{${Array.from(s)
          .map(lescape)
          .map(c => {
            const color = chroma.hsv(steps * ++i, 0.9, 1);
            return `\\color{${color.hex('rgb')}}${c}`;
          })
          .join("")}}\$`
    )
    .join("\n");
};

const trans = async (s: string) => {
  const colors = ["3ae", "e7b", "fff"];
  const segments = Math.ceil(s.length / 4);
  const g = [
    ...gradient(colors[0], colors[1], segments),
    ...gradient(colors[1], colors[2], segments),
    ...gradient(colors[2], colors[1], segments),
    ...gradient(colors[1], colors[0], segments),
  ];

  return s
    .split("\n")
    .map(
      (s) =>
        `\$\\textsf{${Array.from(s)
          .map(lescape)
          .map((c, i) => `\\color{${g[i]}}${c}`)
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
