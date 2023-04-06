import { LanguageData } from '../models/language';
import dataEN from './dataEN';
import dataES from './dataES';

const languageData:LanguageData[] = [
  {
    languageLabel: 'ES',
    data: dataES,
  },
  {
    languageLabel: 'EN',
    data: dataEN,
  },
];

export default languageData;
