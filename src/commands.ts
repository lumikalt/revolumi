import { cattify, owoify } from "./lib/owoify";
import { lescape } from "./lib/escape";
import chroma from 'chroma-js';

const gradient = (start: string, end: string, length: number) => {
  const colors: string[] = [];

  for (let i = 1; i <= length; i++) {
    colors.push(chroma.mix(start, end, i / length).hex('rgb'));
  }

  return colors;
}

export const gay = (s: string) => {
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

export const trans = (s: string) => {
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

export const owo = (s: string) => owoify(s);
export const cat = (s: string) => cattify(s);
