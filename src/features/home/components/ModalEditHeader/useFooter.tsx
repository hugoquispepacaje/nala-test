import { useContext } from 'react';
import LanguageContext from '../../../../context/Language/LanguageContext';

const useFooter = () => {
  const { language } = useContext(LanguageContext);
  return {
    cancelLabel: language.data.cancel,
    editLabel: language.data.edit,
  };
};

export default useFooter;
