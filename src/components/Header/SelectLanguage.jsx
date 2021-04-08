import React, { useState } from "react";
import styles from "./SelectLanguage.module.css";

import { useLanguage } from "../../context/LanguageTranslator";
import { Route, useHistory } from "react-router";

const SelectLanguage = () => {
  const { language, setLanguage } = useLanguage("Rus");
  const history = useHistory();

  return (
    <div className={styles.language}>
      <select
        className={styles.selector}
        value={language}
        onChange={(event) => {
          setLanguage(event.target.value);
        }}
      >
        <option value="Rus" className={styles.option}>
          Русский
        </option>
        <option value="Eng" className={styles.option}>
          English
        </option>
        <option value="Fr" className={styles.option}>
          Français
        </option>
      </select>
    </div>
  );
};

export default SelectLanguage;
