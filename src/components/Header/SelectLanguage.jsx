import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageTranslator";

const SelectLanguage = () => {
  const { language, setLanguage } = useLanguage("Rus");

  console.log(language);

  return (
    <select
      value={language}
      onChange={(event) => {
        setLanguage(event.target.value);
      }}
    >
      <option value="Rus">Русский</option>
      <option value="Eng">English</option>
      <option value="Fr">French</option>
    </select>
  );
};

export default SelectLanguage;
