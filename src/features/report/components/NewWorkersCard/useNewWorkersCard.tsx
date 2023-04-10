import { useContext } from 'react';
import LanguageContext from '../../../../context/Language/LanguageContext';

const useNewWorkersCard = () => {
  const { language } = useContext(LanguageContext);
  return {
    newWorkersTitle: language.data.report.newWorkersTitle,
  };
};

export default useNewWorkersCard;
