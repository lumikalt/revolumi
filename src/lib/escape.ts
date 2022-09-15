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
  ["~", "\\textasciitilde"]
]);

export const lescape = (c: string) => defaultEscapes.get(c) ?? c;
