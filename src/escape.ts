// see escape-latex
// https,//github.com/dangmai/escape-latex/blob/master/src/index.js

const needsEscape = ["{", "}", "\\", "#", "$", "%", "&", "^", "_", "~"];

const defaultEscapes = new Map([
	["{", "\\{"],
	["}", "\\}"],
	["\\", "\\textbackslash"],
	["#", "\\#"],
	["$", "\\textdollar"],
	["%", "\\%"],
	["&", "\\&"],
	["^", "\\textasciicircum"],
	["_", "\\_"],
	["~", "\\textasciitilde"],
]);

const lescape = (c: string) => defaultEscapes.get(c) ?? c;

export default lescape;
