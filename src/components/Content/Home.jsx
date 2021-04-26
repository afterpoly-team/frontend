import React, {useEffect, useState} from "react";
import styles from "./Home.module.css";
import RealLifeEvents from "./RealLifeEvents";

let tags = [
    "Политех",
    "Бары",
    "Кино",
    "Концерт",
    "Кафе",
    "Учеба",
    "Выставки",
    "Театры",
]

const Home = () => {
    const [state, setState] = useState(false);


    useEffect(() => {
        let temp;
        let chkTags = [];
        tags.map(item => {
            temp = document.getElementById(item);
            if (temp.checked) {
                chkTags.push(item);
            }
        })
    }, [state]);

    return (
        <div>
            <div className={styles.filter}>
                <label htmlFor="poly">
                    <div className={styles.tag}>
                        <input type="checkbox" id="Политех" onChange={() => {
                            if (state === false) setState(true);
                            else setState(false);
                        }}/>
                        Политех
                    </div>
                </label>
                <div className={styles.tag}>
                    <input type="checkbox" id="Бары" onChange={() => {
                        if (state === false) setState(true);
                        else setState(false);
                    }}/>
                    Бары
                </div>
                <div className={styles.tag}>
                    <input type="checkbox" id="Кино" onChange={() => {
                        if (state === false) setState(true);
                        else setState(false);
                    }}/>
                    Кино
                </div>
                <div className={styles.tag}>
                    <input type="checkbox" id="Концерт" onChange={() => {
                        if (state === false) setState(true);
                        else setState(false);
                    }}/>
                    Концерты
                </div>
                <div className={styles.tag}>
                    <input type="checkbox" id="Кафе" onChange={() => {
                        if (state === false) setState(true);
                        else setState(false);
                    }}/>
                    Кафе
                </div>
                <div className={styles.tag}>
                    <input type="checkbox" id="Учеба" onChange={() => {
                        if (state === false) setState(true);
                        else setState(false);
                    }}/>
                    Учеба
                </div>
                <div className={styles.tag}>
                    <input type="checkbox" id="Выставки" onChange={() => {
                        if (state === false) setState(true);
                        else setState(false);
                    }}/>
                    Выставки
                </div>
                <div className={styles.tag}>
                    <input type="checkbox" id="Театры" onChange={() => {
                        if (state === false) setState(true);
                        else setState(false);
                    }}/>
                    Театры
                </div>
            </div>
            <div className={styles.content}>
                <RealLifeEvents />
            </div>
        </div>
    )
}

export default Home;
