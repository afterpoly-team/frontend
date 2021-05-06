import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Tag from './Tag';
import { useLanguage } from '../../context/LanguageTranslator';
import { getLanguage } from '../../utils/getLanguage';
import EventList from './EventList';
import {ONLINE_EVENT, REAL_LIFE_EVENT, PLACE} from '../../consts/Constants'

const initialTagList =  [];

const Home = (props) => {
    const [tagList, setTagList] = useState(initialTagList);
    const { language } = useLanguage();
    const currentLanguage = getLanguage(language);
    const [eventType, setEventType] = useState(ONLINE_EVENT);
    const [queryString, setQueryString] = useState('');
    const [checkboxes, setCheckboxes] = useState({});

    useEffect(async () => {
        try {
            
            setTagList(initialTagList);
            // console.log('USEEFFECT');
            const langUrl = currentLanguage.urlName;
            const defaultUrl = `http://localhost:8000/${langUrl}/api/tags/`;

            const res = await fetch(defaultUrl);
            const results = await res.json();
            // [{..}]
            // const checkboxes = results.map(({id, name}) => ({ id, name, checked: false }));
            // {name: bool, }
            //const checkboxes = results.reduce((acc, {id, name}) => ({ ...acc, [name]: false }), {});
 
            setTagList(results);
        } catch (error) {
            console.log('ERROR IN USEEFFECT1 HOME', error);
        }
    }, [currentLanguage]);

    useEffect(async () => {
        try {
            let chkTags = [];
            Object.keys(checkboxes).forEach((key) => {
                if (checkboxes[key] === true) {
                    chkTags.push("&tags="+key);
                }
            });
            setQueryString(chkTags.join(''));
            console.log(chkTags);
        } catch (error) {
            console.log('ERROR IN USEEFFECT2 HOME', error);
        }
    }, [checkboxes]);

    const renderTags = () => {

        // console.log('RENDERTAGS');

        if (tagList !== undefined) {
            return tagList.map(({name}) => (
                <div className={styles.tag}>
                    <input
                        type="checkbox"
                        checked={checkboxes[name]}
                        onChange={() => {
                            setCheckboxes(prev =>({ ...prev, [name]: !checkboxes[name] }))
                        }}
                    />
                    {name}
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
                <EventList
                    eventType={eventType}
                    page="1"
                    queryString={queryString}
                />
            </div>
        </div>
    );
};

export default Home;
