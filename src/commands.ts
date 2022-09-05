import { randomInt } from "crypto";
import { cattify, owoify } from "./lib/owoify";
import lescape from "./lib/escape";

export const gay = (s: string) => {
	const colors = ["F66", "FC6", "CF6", "6F6", "6FC", "6CF", "66F", "C6F"];
	let timer = randomInt(8);

	return s
		.split("\n")
		.map(
			(s) =>
				`\$\\textsf{${Array.from(s)
					.map(lescape)
					.map((c) => {
						timer = ++timer % 8;

						return `\\color{#${colors[timer]}}${c}`;
					})
					.join("")}}\$`
		)
		.join("\n");
};

export const trans = (s: string) => {
	const colors = ["3ae", "e7b", "fff"];
	let timer = 1;

	return s
		.split("\n")
		.map(
			(s) =>
				`\$\\textsf{${Array.from(s)
					.map(lescape)
					.map((c) => {
						++timer;
						let color =
							Math.round(Math.cos(timer * (Math.PI / 2))) + 1;
						return `\\color{#${colors[color]}}${c}`;
					})
					.join("")}}\$`
		)
		.join("\n");
};

export const owo = (s: string) => owoify(s);
export const cat = (s: string) => cattify(s);
