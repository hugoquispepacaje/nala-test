interface Report {
  totalSalaryTitle: string;
  newWorkersTitle: string;
  workerNameLabel: string;
  workerIncreaseLabel: string;
  increaseSalaryWorkersTitle: string;
  organizationChartTitle: string;
  printLabel: string;
}

interface ImportantHeader {
  headerTitle: string;
  departmentLabel: string;
  idLabel: string;
  bossIdLabel: string;
  salaryLabel: string;
  startDateLabel: string;
  message: string;
  errorMessageHeader: string;
  errorMessage: string;
}

interface SidebarMenu {
  welcomeMessage: string;
  editProfile: string;
  changeLanguage: string;
}
interface PreviewTable {
  previewData: string;
}
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
  save: string;
  goHome: string;
  importFile: ImportFileLabels;
  sidebar: SidebarMenu;
  previewTable: PreviewTable;
  importantHeader: ImportantHeader;
  report: Report;
}

interface LanguageData {
  languageLabel: string;
  data: Data;
}

export { type LanguageData, type Data };
