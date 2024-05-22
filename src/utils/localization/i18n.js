import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN  from './locals/en.json';
import translationAR  from './locals/ar.json';

const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;