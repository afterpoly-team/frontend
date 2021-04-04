import React, { useState } from "react";

import { useLanguage } from "../../context/LanguageTranslator";
import { Route, useHistory } from "react-router";

const SelectLanguage = () => {
  const { language, setLanguage } = useLanguage("Rus");
  const history = useHistory();

  console.log(language);

  return (
    <Route
      render={({ history }) => (
        <select
          value={language}
          onChange={(event) => {
            localStorage.setItem("langSelect", event.target.value);
            window.location.reload();
            setLanguage(localStorage.getItem("langSelect"));
          }}
        >
          <option value="Rus">Русский</option>
          <option value="Eng">English</option>
          <option value="Fr">Français</option>
        </select>
      )}
    />
  );
};

export default SelectLanguage;
