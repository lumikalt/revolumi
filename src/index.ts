import * as dotenv from "dotenv";
dotenv.config();

import { Client } from "revolt.js";
import { gay, owo, uvu, uwu } from "./commands";

let client = new Client();

client.on("ready", async () =>
	console.info(`Logged in as ${client.user?.username}!`)
);

client.on("message", async (message) => {
	if (
		message.content?.toLowerCase() === "real" &&
		message.author?._id !== client.user?._id
	) {
		let time = new Date();

		console.log(
			`[${time.toUTCString()}]: real in ${message.channel?.name}, ${
				message.channel?.server?.name
			}, to ${message.author?.username}`
		);
		return message.channel?.sendMessage("real");
	}
	if (!message.content?.startsWith("real!")) return;

	let splitted = message.content?.substring(5).split(" ");
	let command = splitted.shift();
	let args = splitted.join(" ");
	let res: string | null = null;

	switch (command) {
		case "gay":
			res = gay(args);
			break;
		case "shrug":
			res = "¯\\\\\\_(ツ)\\_/¯";
			break;
		case "owo":
			res = owo(args);
			break;
		case "uwu":
			res = uwu(args);
			break;
		case "uvu":
			res = uvu(args);
			break;
	}

	console.log(res);

	if (res && res.length < 2000) message.channel?.sendMessage(res);
});

client.useExistingSession({
	name: "sus",
	token: process.env.TOKEN ?? "sus",
	user_id: "sus",
});
