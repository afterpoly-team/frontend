import React from "react";
import styles from "./SlideBar.module.css";
import {NavLink} from "react-router-dom";
import {useLanguage} from "../../context/LanguageTranslator";
import {getLanguage} from "../../utils/getLanguage";

const SlideBar = () => {
    const {language} = useLanguage();
    const currentLanguage = getLanguage(language);

    return (
        <div className={styles.slideWrapper}>
            <input type="checkbox" id={styles.checkbox1}/>
            <div className={styles.panel}>
                <label className={styles.panelBtnClose} htmlFor={styles.checkbox1}>
                    +
                </label>
                <ul type="none" className={styles.list}>
                    <li className={styles.listElements}>
                        <NavLink to="/" className={styles.link}>
                            {currentLanguage.home}
                        </NavLink>
                    </li>
                    <hr className={styles.firstLine}/>
                    <li className={styles.listElements}>
                        <NavLink to="/places" className={styles.link}>
                            {currentLanguage.places}
                        </NavLink>
                        <hr className={styles.line}/>
                    </li>
                    <li className={styles.listElements}>
                        <NavLink to="/online-events" className={styles.link}>
                            {currentLanguage.online}
                        </NavLink>
                        <hr className={styles.line}/>
                    </li>
                    <li className={styles.listElements}>
                        <NavLink to="/ru/api/real-life-events" className={styles.link}
                                 href="http://127.0.0.1:8000/ru/api/real-life-events/">
                            {currentLanguage.real}
                        </NavLink>
                        <hr className={styles.line}/>
                    </li>
                    <hr className={styles.lastLine}/>
                    <li className={styles.listElements}>
                        <NavLink to="#s" className={styles.link}>
                            {currentLanguage.contacts}
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={styles.buttonWrap}>
                <label className={styles.button1} htmlFor={styles.checkbox1}>
                    <div className={`${styles.btn} ${styles.open}`}/>
                </label>
            </div>
        </div>
    );
};

export default SlideBar;
