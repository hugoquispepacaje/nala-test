import { createContext } from 'react';
import languages from '../../data/languageData';
import { LanguageState } from './props';
import { LanguageData } from '../../models/language';

const getLanguage = () : LanguageData => {
  const language = localStorage.getItem('languageData') ? JSON.parse(localStorage.getItem('languageData') || '') : languages[0];
  return (language || languages[0]);
};

export const initialState:LanguageState = {
  language: getLanguage(),
  setLanguage: (language:LanguageData) => language || null,
};

const LanguageContext = createContext(initialState);

export default LanguageContext;
