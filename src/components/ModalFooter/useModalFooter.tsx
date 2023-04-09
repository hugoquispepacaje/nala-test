import { useContext } from 'react';
import LanguageContext from '../../context/Language/LanguageContext';

const useFooter = (customCancelLabel: string | undefined, customSaveLabel: string | undefined) => {
  const { language } = useContext(LanguageContext);
  return {
    cancelLabel: customCancelLabel || language.data.cancel,
    editLabel: customSaveLabel || language.data.edit,
  };
};

export default useFooter;
