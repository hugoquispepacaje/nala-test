import { useContext } from 'react';
import LanguageContext from '../../../../context/Language/LanguageContext';
import languageData from '../../../../data/languageData';

const useHeader = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const onChangeLanguage = () => {
    const esLanguage = languageData[0];
    const enLanguage = languageData[1];
    setLanguage(esLanguage.languageLabel === language.languageLabel ? enLanguage : esLanguage);
  };

  return { language, onChangeLanguage };
};

export default useHeader;
