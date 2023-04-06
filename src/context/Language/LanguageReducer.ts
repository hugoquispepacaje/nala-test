import { LanguageData } from '../../models/language';
import SET_LANGUAGE from '../types';
import { LanguageAction, LanguageState } from './props';

const saveInStorage = (language:LanguageData) => {
  localStorage.setItem('languageData', JSON.stringify(language));
};

const LanguageReducer = (state: LanguageState, action:LanguageAction) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LANGUAGE:
      saveInStorage(payload.language);
      return {
        ...state,
        language: payload.language,
      };
    default:
      return state;
  }
};

export default LanguageReducer;
