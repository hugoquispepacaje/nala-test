interface ImportFileLabels {
  uploadFile: string;
  clearFile: string;
  editHeader: string;
  generateReport: string;
}

interface Data {
  title: string;
  cancel: string;
  edit: string;
  importFile: ImportFileLabels;
}

interface LanguageData {
  languageLabel: string;
  data: Data;
}

export { type LanguageData, type Data };
