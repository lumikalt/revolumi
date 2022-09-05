import * as dotenv from "dotenv";
dotenv.config();

import { Client } from "revolt.js";
import { cat, gay, owo, trans } from "./commands";
import { cattify } from "./lib/owoify";

let client = new Client();

client.on("ready", async () =>
	console.info(`Logged in as ${client.user?.username}!`)
);

client.on("message", async (msg) => {
	if (!msg.content) return;
	if (
		msg.author_id === client.user?._id &&
		cattify(msg.content) !== msg.content
	) {
		msg.edit({ content: cattify(msg.content) });
	} else if (!msg.content.startsWith("real!") || msg.content.length >= 2000)
		return;

	let splitted = msg.content.substring(5).split(" ");
	let command = splitted.shift();
	let args = splitted.join(" ");
	let res: string | null = null;

	switch (command) {
		case "gay":
			res = gay(args);
			break;
		case "trans":
			res = trans(args);
			break;
		case "shrug":
			res = "¯\\\\\\_(ツ)\\_/¯";
			break;
		case "owo":
			res = owo(args);
			break;
		case "cat":
			res = cat(args);
			break;
		case "owocat":
			res = owo(cat(args));
			break;
	}

	if (res && res.length <= 2000) {
		if (msg.author_id === client.user?._id) msg.delete();
		msg.channel?.sendMessage(res);
	}
});

client.useExistingSession({
	name: "sus",
	token: process.env.TOKEN ?? "sus",
	user_id: "sus",
});
