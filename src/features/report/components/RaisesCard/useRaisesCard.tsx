import { useContext } from 'react';
import LanguageContext from '../../../../context/Language/LanguageContext';

const useRaisesCard = () => {
  const { language } = useContext(LanguageContext);
  return {
    increaseSalaryWorkersTitle: language.data.report.increaseSalaryWorkersTitle,
    workerNameLabel: language.data.report.workerNameLabel,
    workerIncreaseLabel: language.data.report.workerIncreaseLabel,
  };
};

export default useRaisesCard;
