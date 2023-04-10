interface ImportantHeader {
  id: string;
  bossId: string;
  department: string;
  salary: string;
  startDate: string;
}

export const importantHeaderDefault: ImportantHeader = {
  id: '',
  bossId: '',
  department: '',
  salary: '',
  startDate: '',
};

export default ImportantHeader;
