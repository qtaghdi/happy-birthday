export const defaultBirthdayName = "";

function hasBatchim(name: string) {
  const lastCharacter = name.at(-1);

  if (!lastCharacter) return false;

  const codePoint = lastCharacter.charCodeAt(0);
  const hangulStart = 0xac00;
  const hangulEnd = 0xd7a3;

  return codePoint >= hangulStart && codePoint <= hangulEnd
    ? (codePoint - hangulStart) % 28 !== 0
    : false;
}

export function getBirthdayNameForms(name: string) {
  const normalizedName = name.trim();

  if (!normalizedName) {
    return {
      plain: "",
      friendly: "",
      subject: "",
      vocative: "",
    } as const;
  }

  const nameHasBatchim = hasBatchim(normalizedName);

  return {
    plain: normalizedName,
    friendly: nameHasBatchim ? `${normalizedName}이` : normalizedName,
    subject: nameHasBatchim ? `${normalizedName}이` : `${normalizedName}가`,
    vocative: `${normalizedName}${nameHasBatchim ? "아" : "야"}`,
  } as const;
}
