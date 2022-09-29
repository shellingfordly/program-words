import { WORDS_KEY, TransSource } from "@/constants";

export * from "./parse";
export * from "./upload";

export function setWordsData(data: WordItem[]) {
  try {
    const str = localStorage.getItem(WORDS_KEY) || "[]";
    const res = JSON.parse(str).concat(data);
    localStorage.setItem(WORDS_KEY, res);
    return true;
  } catch (error) {
    return false;
  }
}

export function createWordCard(item: WordItem) {
  return h("div", { style: { lineHeight: "25px" } }, [
    ...item.translation.map((v) =>
      h("div", { style: { display: "flex", textAlign: "left" } }, [
        h(
          "div",
          { style: { width: "40px", marginRight: 10 } },
          (TransSource[v.source] || v.source) + ":"
        ),
        h("div", { style: { flex: 1, textAlign: "left" } }, v.value),
      ])
    ),
    h("div", { style: { display: "flex", textAlign: "left" } }, [
      h("div", { style: { width: "40px" } }, "原句:"),
      h("div", { style: { flex: 1 } }, item.sentence),
    ]),
  ]);
}
