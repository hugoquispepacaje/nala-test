import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import getExcelToJson from '../../../../utils/xlsx';
import LanguageContext from '../../../../context/Language/LanguageContext';

const useImportFile = (
  data: any[],
  setData: (value: any[]) => void,
  setHasData: (state: boolean) => void,
  setModalEditVisible: (state: boolean) => void,
  setModalImportantHeader: (state: boolean) => void,
) => {
  const fileUploadRef = useRef<any>(null);
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const uploadHandler = (e: any) => {
    const file: File = e.files[0];
    getExcelToJson(file)
      .then((response:any[]) => {
        setData(response);
        setHasData(true);
      })
      // eslint-disable-next-line no-console
      .catch((error:any) => console.error(error));
  };

  const onClear = () => {
    setData([]);
    setHasData(false);
    fileUploadRef.current?.clear();
  };

  const onPressEditHeader = () => {
    setModalEditVisible(true);
  };

  const onPressGenerateReport = () => {
    setModalImportantHeader(true);
  };

  return {
    fileUploadRef,
    uploadHandler,
    onClear,
    onPressEditHeader,
    onPressGenerateReport,
    data,
    uploadFileLabel: language.data.importFile.uploadFile,
    clearFileLabel: language.data.importFile.clearFile,
    generateReportLabel: language.data.importFile.generateReport,
    editHeaderLabel: language.data.importFile.editHeader,
  };
};

export default useImportFile;
