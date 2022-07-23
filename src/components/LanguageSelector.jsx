import * as flags from "../assets/img/flags/";
import { useState } from "react";
import i18next from "i18next";
import cookies from "js-cookie";

const languages = ["fr", "en"];

export default function LanguageSelector() {
  const currentLanguage = cookies.get("i18next") || "en";
  const [lng, setLng] = useState(currentLanguage);
  const onChangeLanguage = (lng) => {
    setLng(lng);
    i18next.changeLanguage(lng);
  };
  return (
    <div className="flex gap-x-2">
      {languages.map((language) => (
        <button
          key={language}
          className={`shadow transition opacity-50 hover:opacity-100 ${
            lng === language && "!opacity-100 !shadow-lg cursor-default"
          }`}
          onClick={() => onChangeLanguage(language)}
          aria-label={language}
        >
          <img src={flags[language]} alt={language} className="w-6 h-[18px] rounded" />
        </button>
      ))}
    </div>
  );
}
