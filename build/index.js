const fs = require("fs");
const { join } = require("path");
const {
  isDivider,
  isSentence,
  isWord,
  isTranslationSource,
  isTranslation,
} = require("./utils");

function parseWords(content) {
  const list = content.split("\n\n").filter((v) => v);

  const result = [];

  for (let i = 0; i < list.length; i++) {
    const [word, translations, sentence] = list[i].split("\n");
    if (i == 0) console.log(sentence);

    const item = {
      word,
      translation: [],
      sentence,
    };

    const translationList = translations.split("\\n\\n");

    translationList.forEach((translation) => {
      const [source, str] = translation.split("\\n");
      item.translation.push({
        source: source.trim().replace(/:|\[|\]|\s/g, ""),
        value: str ? str.trim() : "",
      });
    });
    result.push(item);
  }

  return result;
}

function formatWords(list) {
  const result = [];
  for (const l of list) {
    const item = {
      word: "",
      translation: [],
      sentence: "",
    };
    for (const str of l) {
      if (isWord(str)) {
        item.word = str;
      } else if (isTranslationSource(str)) {
        item.translation.push({
          source: str.replace(/:|\[|\]|\s/g, ""),
          value: "",
        });
      } else if (isTranslation(str)) {
        const t = item.translation.pop();
        t.value = str;
        item.translation.push(t);
      } else if (isSentence(str)) {
        item.sentence = str;
      }
    }
    result.push(item);
  }
  return result;
}

(async function init() {
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
