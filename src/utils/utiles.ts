// eslint-disable-next-line import/no-unresolved
import moment from 'moment';
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

const getMonthFormatted = (month: string): string => (
  moment(month, 'DD-MM-YYYY').format('MM-YYYY')
);

const getPreviusMonth = (month: string): string => {
  const numberMonth: number = parseInt(month.split('-')[0], 10);
  const numberYear: number = parseInt(month.split('-')[1], 10);
  if (numberMonth === 1) {
    return `12-${numberYear - 1}`;
  }
  if (numberMonth < 10) {
    return `0${numberMonth - 1}-${numberYear}`;
  }
  return `${numberMonth - 1}-${numberYear}`;
};

export {
  getHeaders,
  getInitLanguageLabel,
  getLanguageToChangeLabel,
  getLanguageToChange,
  montoMoneda,
  getMonthFormatted,
  getPreviusMonth,
};
