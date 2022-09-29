const DividerCode = "---------------";

export function isDivider(str: string) {
  return str === DividerCode;
}

export function parseTxt(content: string) {
  const list: string[] = content.split("\n\n").filter((v) => v);
  const result = [];
  for (let i = 0; i < list.length; i++) {
    const word = list[i].match(/([a-z]|[A-Z]|\s|-)+/)![0].replace("\n", "");
    const [translations, sentence] = list[i].match(/<p>(.+)<\/p>/g)!;
    const item: WordItem = {
      word: word || "",
      translation: [],
      sentence: sentence ? sentence.replace(/<p>|<\/p>/g, "") : "",
    };

    const translationList = translations
      .split("</p><p>")
      .map((v) => v.replace(/<p>|<\/p>/g, ""))
      .filter((v) => !!v.trim() && !isDivider(v));

    for (let i = 0; i < translationList.length; i += 2) {
      item.translation.push({
        source: translationList[i].trim().replace(/:|\[|\]|\s/g, ""),
        value: translationList[i + 1].trim(),
      } as never);
    }
    result.push(item);
  }
  return result;
}
