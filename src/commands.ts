import { randomInt } from "crypto";
import owoify from "owoify-js";
import lescape from "./escape";

const colors = ["F66", "FC6", "CF6", "6F6", "6FC", "6CF", "66F", "C6F"];

export const gay = (text: string) => {
	let count = randomInt(8);

	return text
		.split("\n")
		.map(
			(t) =>
				`\$\\textsf{${Array.from(t)
					.map((c) => {
						count = ++count % 8;
						c = lescape(c);
						return `\\color{#${colors[count]}}${c}`;
					})
					.join("")}}\$`
		)
		.join("\n");
};

export const owo = (text: string) => owoify(text, "owo");
export const uwu = (text: string) => owoify(text, "uwu");
export const uvu = (text: string) => owoify(text, "uvu");
