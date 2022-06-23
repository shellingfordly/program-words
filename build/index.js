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
  const list = content.split("\n").filter((v) => v);
  const sourceList = [];
  let cache = [];

  for (let i = 0; i < list.length; i++) {
    const str = list[i];

    if (isDivider(str)) {
      sourceList.push(cache);
      cache = [];
    } else {
      if (isSentence(str)) {
        const last = sourceList[sourceList.length - 1];
        if (last) {
          last.push(str);
        }
      } else {
        cache.push(str);
      }
    }
  }

  console.log("sourceList", sourceList);
  return sourceList;
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
  const result = fs
    .readFileSync(join(__dirname, "../DATA_SOURCE.txt"))
    .toString();
  const parseList = parseWords(result);
  const formatList = formatWords(parseList).filter((item) => !!item.word);
  fs.writeFileSync(
    join(__dirname, "../mock/data.json"),
    JSON.stringify(formatList)
  );
})();
