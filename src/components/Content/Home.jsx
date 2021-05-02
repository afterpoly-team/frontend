import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Tag from './Tag';
import { useLanguage } from '../../context/LanguageTranslator';
import { getLanguage } from '../../utils/getLanguage';
import EventList from './EventList';

const initialTagList = {
    results: [],
};

const ONLINE_EVENT = 'online-event';
const REAL_LIFE_EVENT = 'real-life-event';
const PLACE = 'place';

const Home = (props) => {
    const [flag, setFlag] = useState(false);
    const [tagList, setTagList] = useState(initialTagList);
    const { language } = useLanguage();
    const currentLanguage = getLanguage(language);
    const [eventType, setEventType] = useState(ONLINE_EVENT);
    const [queryString, setQueryString] = useState('')

    useEffect(async () => {
        let chkTags = [];

        try {
            // console.log('USEEFFECT');

            let temp;

            const langUrl = currentLanguage.urlName;
            const defaultUrl = `http://localhost:8000/${langUrl}/api/tags/`;

            const res = await fetch(defaultUrl);
            const results = await res.json();

            setTagList((prev) => ({ ...prev, results }));

            results.map((item) => {
                temp = document.getElementById(item.id);
                if (temp.checked) {
                    chkTags.push("&tags="+item.name);
                    setQueryString(chkTags.join(''))
                    console.log(chkTags, " +flag= ", flag);
                }
            });
        } catch (error) {
            console.log('ERROR IN USEEFFECT HOME', error);
        }
    }, [currentLanguage, flag]);

    const renderTags = () => {
        const tags = tagList.results;

        // console.log('RENDERTAGS');

        if (tags != undefined) {
            return tags.map((item) => (
                <div className={styles.tag}>
                    <input
                        type="checkbox"
                        id={item.id}
                        onChange={() => {
                            if (flag === false) setFlag(true);
                            else setFlag(false);
                        }}
                    />
                    {item.name}
                </div>
            ));
        }
    };

    return (
        <div>
            <div className={styles.filter}>{renderTags()}</div>
            <div>
                <select
                    onChange={(event) => {
                        if (
                            event.target.value === currentLanguage.onlineEvents
                        ) {
                            setEventType(ONLINE_EVENT);
                        } else if (
                            event.target.value ===
                            currentLanguage.realLifeEvents
                        ) {
                            setEventType(REAL_LIFE_EVENT);
                        } else if (
                            event.target.value === currentLanguage.places
                        ) {
                            setEventType(PLACE);
                        }
                    }}
                >
                    <option>{currentLanguage.onlineEvents}</option>
                    <option>{currentLanguage.realLifeEvents}</option>
                    <option>{currentLanguage.places}</option>
                </select>
                <br />
                <br />
                <br />
            </div>
            <div>
                <EventList eventType={eventType} page="1" queryString={queryString}/>
            </div>
        </div>
    );
};

export default Home;
