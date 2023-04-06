import { LanguageData } from '../../models/language';

interface LanguageState {
  language: LanguageData;
  setLanguage: (language: LanguageData) => void;
}

interface LanguageAction {
  type: string;
  payload: LanguageState;
}

interface LanguageStateProps {
  children: JSX.Element;
}

export {
  type LanguageState,
  type LanguageAction,
  type LanguageStateProps,
};
