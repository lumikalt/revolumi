export const cattify = (s: string) =>
	s
		.split(" ")
		.map((s) =>
			(s.startsWith("http"))
				? s
				: s
						.replaceAll("hand", "paw")
						.replaceAll("Hand", "Paw")
						.replaceAll("HAND", "PAW")
						.replaceAll("feet", "paw")
						.replaceAll("Feet", "Paw")
						.replaceAll("FEET", "PAW")
						.replaceAll("leg", "hindleg")
						.replaceAll("Leg", "Hindleg")
						.replaceAll("LEG", "HINDLEG")
						.replaceAll("arm", "foreleg")
						.replaceAll("Arm", "Foreleg")
						.replaceAll("ARM", "FORELEG")

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
