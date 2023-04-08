import { useContext, useState } from 'react';
import LanguageContext from '../../context/Language/LanguageContext';
import { getInitLanguageLabel, getLanguageToChange, getLanguageToChangeLabel } from '../../utils/utiles';

const useHeader = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [otherLanguage, setOtherLanguage] = useState<string>(
    getInitLanguageLabel(language.languageLabel),
  );
  const onChangeLanguage = () => {
    setOtherLanguage(getLanguageToChangeLabel(language.languageLabel));
    setLanguage(getLanguageToChange(language.languageLabel));
  };

  return { language, onChangeLanguage, otherLanguage };
};

export default useHeader;
