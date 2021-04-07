import React, { useState } from "react";

import { useLanguage } from "../../context/LanguageTranslator";
import { Route, useHistory } from "react-router";

const SelectLanguage = () => {
  const { language, setLanguage } = useLanguage("Rus");
  const history = useHistory();

  return (
    <select
      value={language}
      onChange={(event) => {
        setLanguage(event.target.value);
      }}
    >
      <option value="Rus">Русский</option>
      <option value="Eng">English</option>
      <option value="Fr">Français</option>
    </select>
  );
};

export default SelectLanguage;
