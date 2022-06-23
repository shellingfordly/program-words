export interface TranslationItem {
  source: string;
  value: string;
}

export interface WordItem {
  word: string;
  translation: TranslationItem[];
  sentence: string;
}
