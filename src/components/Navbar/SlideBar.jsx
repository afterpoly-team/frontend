import React from 'react';
import styles from './SlideBar.module.css';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageTranslator';
import { getLanguage } from '../../utils/getLanguage';
import Content from '../Content/Content';

const SlideBar = () => {
    const { language } = useLanguage();
    const currentLanguage = getLanguage(language);

    const ONLINE_EVENT = 'online-event';
    const REAL_LIFE_EVENT = 'real-life-event';
    const PLACE = 'place';

    return (
        <div className={styles.slideWrapper}>
            <input type="checkbox" id={styles.checkbox1} />
            <div className={styles.panel}>
                <label
                    className={styles.panelBtnClose}
                    htmlFor={styles.checkbox1}
                >
                    +
                </label>
                <ul type="none" className={styles.list}>
                    <li className={styles.listElements}>
                        <NavLink to="/" className={styles.link}>
                            {currentLanguage.home}
                        </NavLink>
                    </li>
                    <hr className={styles.firstLine} />
                    <li className={styles.listElements}>
                        <NavLink
                            to={`/${ONLINE_EVENT}s/1`}
                            className={styles.link}
                        >
                            {currentLanguage.onlineEvents}

                        </NavLink>
                        <hr className={styles.line} />
                    </li>
                    <li className={styles.listElements}>
                        <NavLink
                            to={`/${REAL_LIFE_EVENT}s/1`}
                            className={styles.link}
                        >
                            {currentLanguage.realLifeEvents}

                        </NavLink>
                        <hr className={styles.line} />
                    </li>
                    <li className={styles.listElements}>
                        <NavLink to={`/${PLACE}s/1`} className={styles.link}>
                            {currentLanguage.places}

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
                    <div className={`${styles.btn} ${styles.open}`} />
                </label>
            </div>
        </div>
    );
};

export default SlideBar;
