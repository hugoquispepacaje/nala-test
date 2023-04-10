import { useContext } from 'react';
import LanguageContext from '../../../../context/Language/LanguageContext';

const useTotalSalaryCard = () => {
  const { language } = useContext(LanguageContext);
  return {
    totalSalaryTitle: language.data.report.totalSalaryTitle,
  };
};

export default useTotalSalaryCard;
