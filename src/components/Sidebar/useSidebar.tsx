import { useContext, useState } from 'react';
import LanguageContext from '../../context/Language/LanguageContext';
import { getInitLanguageLabel, getLanguageToChange, getLanguageToChangeLabel } from '../../utils/utiles';

const useSidebar = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [languageToChange, setLanguageToChange] = useState<string>(
    getInitLanguageLabel(language.languageLabel),
  );

  const changeLanguage = () => {
    setLanguageToChange(getLanguageToChangeLabel(language.languageLabel));
    setLanguage(getLanguageToChange(language.languageLabel));
  };

  return {
    changeLanguageLabel: language.data.sidebar.changeLanguage,
    languageToChange,
    changeLanguage,
  };
};

export default useSidebar;
