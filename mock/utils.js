const DividerCode = "---------------";

function isTranslation(str) {
  return new RegExp(/[\u4e00-\u9fa5]/g).test(str);
}

function isTranslationSource(str) {
  return str.includes("::");
}

function isDivider(str) {
  return str === DividerCode;
}

function isSentence(str) {
  return str.includes(" ") && !isTranslationSource(str) && !isTranslation(str);
}

module.exports = {
  DividerCode,
  isTranslation,
  isTranslationSource,
  isDivider,
  isSentence,
};
