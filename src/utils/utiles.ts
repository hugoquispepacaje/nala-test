import languageData from '../data/languageData';

const getHeaders = (line: Object): string[] => Object.keys(line);

const getInitLanguageLabel = (languageLabel: string) => {
  const esLanguageLabel = languageData[0].languageLabel;
  const enLanguageLabel = languageData[1].languageLabel;
  return esLanguageLabel === languageLabel ? enLanguageLabel : esLanguageLabel;
};

const getLanguageToChangeLabel = (languageLabel: string) => {
  const esLanguageLabel = languageData[0].languageLabel;
  const enLanguageLabel = languageData[1].languageLabel;
  return esLanguageLabel === languageLabel ? esLanguageLabel : enLanguageLabel;
};

const getLanguageToChange = (languageLabel: string) => {
  const esLanguageLabel = languageData[0].languageLabel;
  const esLanguage = languageData[0];
  const enLanguage = languageData[1];
  return esLanguageLabel === languageLabel ? enLanguage : esLanguage;
};

export {
  getHeaders, getInitLanguageLabel, getLanguageToChangeLabel, getLanguageToChange,
};
