import { randomInt } from "crypto";
import lescape from "./escape";

const colors = ["F66", "FC6", "CF6", "6F6", "6FC", "6CF", "66F", "C6F"];

export const gay = (text: string): string => {
	let count = randomInt(8);

	return text
		.split("\n")
		.map(
			(t) =>
				`\$\\textsf{${Array.from(t)
					.map((c) => {
						count = ++count % 8;
						return `\\color{#${colors[count]}}${lescape(c)}`;
					})
					.join("")}}\$`
		)
		.join("\n");
};
