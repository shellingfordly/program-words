const fs = require("fs");
const { join } = require("path");
const { isDivider, isSentence } = require("./utils");

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
  return sourceList;
}

(async function init() {
  const result = fs.readFileSync(join(__dirname, "data.txt")).toString();
  const parseList = parseWords(result);
  fs.writeFileSync(join(__dirname, "data.json"), JSON.stringify(parseList));
})();
