interface TranslationItem {
  source: string;
  value: string;
}

interface WordItem {
  word: string;
  translation: TranslationItem[];
  sentence?: string;
}
