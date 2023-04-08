import * as XLSX from 'xlsx';

const getExcelToJson = (file: File):Promise<any[]> => (
  new Promise((resolve, reject) => {
    const fileReader:FileReader = new FileReader();

    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (e): void => {
      const bufferArray = e?.target?.result;
      const wb = XLSX.read(bufferArray, { type: 'binary', cellText: false, cellDates: true });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { raw: false, dateNF: 'dd/mm/yyyy' });
      resolve(data);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  })
);

export default getExcelToJson;
