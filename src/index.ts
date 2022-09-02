import * as dotenv from "dotenv";
dotenv.config();

import { Client } from "revolt.js";
import Commands from "./commands";

let client = new Client();

client.on("ready", async () =>
	console.info(`Logged in as ${client.user?.username}!`)
);

client.on("message", async (message) => {
	if (
		message.content?.toLowerCase() === "real" &&
		message.author?._id !== client.user?._id
	)
		return message.channel?.sendMessage("real");
	if (!message.content?.startsWith("real!")) return;

	let msg = Commands[message.content?.substring(5)]message.content?.substring(5)
});

`"$\textsf{\color{#F66}T\color{#FC6}H\color{#CF6}E\color{#6F6} \color{#6FC}I\color{#6CF}M\color{#66F}P\color{#C6F}O\color{#F66}S\color{#FC6}T\color{#CF6}E\color{#6F6}R\color{#6FC} \color{#6CF}W\color{#66F}H\color{#C6F}E\color{#F66}N\color{#FC6} \color{#CF6}S\color{#6F6}U\color{#6FC}S\color{#6CF}P\color{#66F}I\color{#C6F}C\color{#F66}I\color{#FC6}O\color{#CF6}U\color{#6F6}S}$"`;

client.useExistingSession({
	name: "sus",
	token: process.env.TOKEN ?? "sus",
	user_id: "sus",
});
