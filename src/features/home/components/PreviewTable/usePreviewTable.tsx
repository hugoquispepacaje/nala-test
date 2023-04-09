import { useContext } from 'react';
import LanguageContext from '../../../../context/Language/LanguageContext';

const usePreviewTable = () => {
  const { language } = useContext(LanguageContext);
  return {
    previewDataLaber: language.data.previewTable.previewData,
  };
};

export default usePreviewTable;
