import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
// const resources = {
//   en: {
//     translation: {
//       "Welcome to React": "Welcome to React and react-i18next",
//     },
//   },
//   fr: {
//     translation: {
//       "Welcome to React": "Bienvenue à React et react-i18next",
//     },
//   },
// };

const enTranslation = {
  translation: {
    home: { title: "Front-End Web Developer" },
    "Welcome to React": "Welcome to React",
  },
};
const frTranslation = {
  translation: {
    home: { title: "Développeur Front-End", subtitle: "" },
    "Welcome to React": "Bienvenue dans React",
  },
};

i18n.use(initReactI18next).init({
  resources: { en: enTranslation, fr: frTranslation },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
