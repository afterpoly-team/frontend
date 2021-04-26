import React, {useEffect, useState} from "react"
import {useLanguage} from "../../context/LanguageTranslator";
import {getLanguage} from "../../utils/getLanguage";
import EventTemplate from "./EventTemplate";

const initialState = {
    fullAPI: {
        count: 0,
        next: null,
        previous: null,
        results: [],
        total_pages: 0,
    },
}

const RealLifeEvents = (props) => {
    const [state, setState] = useState(initialState);
    const {language} = useLanguage();
    const currentLanguage = getLanguage(language);

    useEffect(async () => {
        const langUrl = currentLanguage.urlName;
        const defaultUrl = `http://127.0.0.1:8000/${langUrl}/api/real-life-events`;

        const res = await fetch(defaultUrl);
        const fullAPI = await res.json();

        setState(prev => ({...prev, fullAPI}));
    }, [currentLanguage.urlName])


    const renderEvents = () => {
        const eventList = state.fullAPI.results;
        eventList.map((item) => {
            let tagName = "";
            let tmpTags = item.tags.map(async (item) => {
                const tmpResTag = await fetch(item);
                const tag = await tmpResTag.json();
                return tag.name;
            })
            console.log(tmpTags)
            // const nameTags =
            return (
                <div className={tagName}>
                    <EventTemplate
                        title={item.title}
                        description={item.description}
                        identificat={item.id}
                        link={item.url}
                    />
                </div>
            )
        })
    }

    return (
        <ul>{renderEvents()}</ul>
    )
}
export default RealLifeEvents;