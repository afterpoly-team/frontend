import React from "react";
import styles from "./SlideBar.module.css";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/LanguageTranslator";
import { getLanguage } from "../../utils/getLanguage";

const SlideBar = () => {
  const { language } = useLanguage();
  const currentLanguage = getLanguage(language);

  return (
    <div className={styles.slideWrapper}>
      <input type="checkbox" id={styles.checkbox1} />
      <div className={styles.panel}>
        <label className={styles.panelBtnClose} htmlFor={styles.checkbox1}>
          +
        </label>
        <ul type="none" className={styles.list}>
          <li>
            <NavLink to="/" className={styles.link}>
              {currentLanguage.home}
            </NavLink>
          </li>
          <li>
            <NavLink to="/events/1" className={styles.link}>
              {currentLanguage.events}
            </NavLink>
          </li>
          <li>
            <NavLink to="#s" className={styles.link}>
              {currentLanguage.contacts}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.buttonWrap}>
        <label className={styles.button1} htmlFor={styles.checkbox1}>
          <div className={`${styles.btn} ${styles.open}`} />
        </label>
      </div>
    </div>
  );
};

export default SlideBar;
