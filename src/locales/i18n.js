import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './lang.en.json';
import ko from './lang.ko.json';

// let lang = null;
// if (typeof window !== 'undefined') {
//   lang = localStorage.getItem('@m1/lang');
// }

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ko: {
      translation: ko,
    },
  },
  // lng: lang === null ? 'en' : lang,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
