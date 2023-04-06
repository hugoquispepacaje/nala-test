/* eslint no-console: ["error", { allow: ["error"] }] */
import { useReducer, useMemo } from 'react';
import LanguageContext, { initialState } from './LanguageContext';
import LanguageReducer from './LanguageReducer';
import SET_LANGUAGE from '../types';
import { LanguageStateProps } from './props';
import { LanguageData } from '../../models/language';

const LanguageState = (props:LanguageStateProps) => {
  const [state, dispatch] = useReducer(LanguageReducer, initialState);
  const { children } = props;

  const setLanguage = (language:LanguageData) => {
    try {
      dispatch({ type: SET_LANGUAGE, payload: { ...initialState, language } });
    } catch (error) {
      console.error(error);
    }
  };

  const value = useMemo(() => ({
    ...state,
    setLanguage,
  }), [state.language]);

  return (
    <LanguageContext.Provider
      value={value}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageState;
