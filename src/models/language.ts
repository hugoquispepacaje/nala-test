interface Data {
  title: string;
}

interface LanguageData {
  languageLabel: string;
  data: Data;
}

export { type LanguageData, type Data };
