// see escape-latex
// https://github.com/dangmai/escape-latex/blob/master/src/index.js

const defaultEscapes = {
	"{": "\\{",
	"}": "\\}",
	"\\": "\\textbackslash{}",
	"#": "\\#",
	$: "\\$",
	"%": "\\%",
	"&": "\\&",
	"^": "\\textasciicircum{}",
	_: "\\_",
	"~": "\\textasciitilde{}",
};

const defaultEscapeMapFn = (defaultEscapes: any) =>
	Object.assign({}, defaultEscapes);

const lescape = (
	str: string,
	{ preserveFormatting = false, escapeMapFn = defaultEscapeMapFn } = {}
) => {
	let runningStr = String(str);
	let result = "";

	const escapes = escapeMapFn(Object.assign({}));
	const escapeKeys = Object.keys(escapes); // as it is reused later on

	// Algorithm: Go through the string character by character, if it matches
	// with one of the special characters then we'll replace it with the escaped
	// version.
	while (runningStr) {
		let specialCharFound = false;
		escapeKeys.forEach(function (key, index) {
			if (specialCharFound) {
				return;
			}
			if (
				runningStr.length >= key.length &&
				runningStr.slice(0, key.length) === key
			) {
				result += escapes[escapeKeys[index]];
				runningStr = runningStr.slice(key.length, runningStr.length);
				specialCharFound = true;
			}
		});
		if (!specialCharFound) {
			result += runningStr.slice(0, 1);
			runningStr = runningStr.slice(1, runningStr.length);
		}
	}
	return result;
};

export default lescape;
