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

const montoMoneda = (valor: number): string => {
  if (typeof valor !== 'undefined' && valor !== null) {
    const number = valor.toString();
    if (number === '0') return '$0';
    if (valor < 0) {
      const numberFormateado = number.replace('-', '');
      return `-$${numberFormateado.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
    }
    return `$${number.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  }
  return '$ *****';
};

export {
  getHeaders,
  getInitLanguageLabel,
  getLanguageToChangeLabel,
  getLanguageToChange,
  montoMoneda,
};
