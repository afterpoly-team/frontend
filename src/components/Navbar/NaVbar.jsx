import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useLanguage } from "../../context/LanguageTranslator";
import { getLanguage } from "../../utils/getLanguage";

const NaVbar = () => {
  const { language } = useLanguage();
  const currentLanguage = getLanguage(language);

  return (
    <div className={styles.nav}>
      <ul type="none">
        <li>
          <NavLink to="/">{currentLanguage.home}</NavLink>
        </li>
        <li>
          <NavLink to="/events/">{currentLanguage.events}</NavLink>
        </li>
        <li>
          <NavLink to="#s">{currentLanguage.contacts}</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NaVbar;
