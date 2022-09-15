import { exec as execCB } from "child_process";
import { promisify } from "util";

const exec = promisify(execCB);

const dontAlter = ["not"];

export const cattify = (s: string) =>
  s
    .split(" ")
    .map(s =>
      s.startsWith("http") || dontAlter.includes(s)
        ? s
        : s
            .replaceAll("hand", "paw")
            .replaceAll("Hand", "Paw")
            .replaceAll("HAND", "PAW")
            .replaceAll("feet", "paw")
            .replaceAll("Feet", "Paw")
            .replaceAll("FEET", "PAW")
            .replace(/^leg$/g, "hindleg")
            .replace(/^Leg$/g, "Hindleg")
            .replace(/^LEG$/g, "HINDLEG")
            .replace(/^arm/g, "foreleg")
            .replace(/^Arm/g, "Foreleg")
            .replace(/^ARM/g, "FORELEG")

            .replace(/([Ee])veryone/g, "$1verynyan")
            .replace(/EVERYONE/g, "EVERYNYAN")

            .replaceAll("now", "nyow")
            .replaceAll("Now", "Nyow")
            .replaceAll("NOW", "NYOW")

            .replace(/([Nn])o/g, "$1u")
            .replace(/([Nn])O/g, "$1U")
            .replace(/([Nn])a/g, "$1ya")
            .replaceAll("NA", "NYA")
            .replace(/([Nn])u/g, "$1yu")
            .replaceAll("NU", "NYU")
    )
    .join(" ");

export const owoify = (s: string) =>
  s
    .replace(/[rl]/g, "w")
    .replace(/[LR]/g, "W")
    .replace(/([nN])([aeiou])/g, "$1y$2")
    .replace(/N([AEIOU])/g, "NY$1")

    .replace(/o/g, () => (!Math.round(Math.random() * 10) ? "owo" : "o"));

export const bottom = async (n: number) => {
  let s: string;

  s = (await exec(
    `uwurandom tr -cd [:graph:] | tr -d '\n' | fold -w ${n} | head -n 1`
  )).stdout

  console.log(s);

  return s.trimEnd();
};
