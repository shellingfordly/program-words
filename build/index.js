const fs = require("fs");
const { join } = require("path");
const { isDivider } = require("./utils");

function parseWords(content) {
  const list = content.split("\n\n").filter((v) => v);
  const result = [];
  for (let i = 0; i < list.length; i++) {
    const word = list[i].match(/([a-z]|[A-Z]|\s|-)+/)[0].replace("\n", "");
    const [translations, sentence] = list[i].match(/<p>(.+)<\/p>/g);
    const item = {
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
      });
    }
    result.push(item);
  }
  return result;
}

(function init() {
  const dirs = fs.readdirSync(join(__dirname, "../mock/source"));

  for (const dir of dirs) {
    const result = fs
      .readFileSync(join(__dirname, `../mock/source/${dir}`))
      .toString();

    const list = parseWords(result);
    const jsonData = JSON.parse(
      fs.readFileSync(join(__dirname, "../mock/data.json"))?.toString()
    );

    fs.writeFileSync(
      join(__dirname, "../mock/data.json"),
      JSON.stringify(jsonData.concat(list))
    );
  }
})();
