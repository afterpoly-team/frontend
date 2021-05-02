import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import EventTemplate from './EventTemplate';
import { useLanguage } from '../../context/LanguageTranslator';
import { getLanguage } from '../../utils/getLanguage';
import Pagination from './Pagination';

const initialState = {
    fullAPI: {
        count: 0,
        next: null,
        previous: null,
        results: [],
        total_pages: 0,
    },
};

const EventList = (props) => {
    const { language } = useLanguage();
    const currentLanguage = getLanguage(language);

    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [dates, setDates] = useState();

    const params = useParams();

    useEffect(async () => {
        try {
            setLoading(true);
            console.log('EVENT LIST');
            const langUrl = currentLanguage.urlName;
            let page;
            if (props.match && props.match.params.page) {
                page = props.match.params.page;
            } else {
                page = props.page;
            }

            let queryString;
            if (props.queryString) {
                queryString = props.queryString;
            }
            const eventType = props.eventType;

            let defaultUrl;
            if (queryString){
                defaultUrl = `http://localhost:8000/${langUrl}/api/${eventType}s/?page=${page}${queryString}`;
            }
            else{
            defaultUrl = `http://localhost:8000/${langUrl}/api/${eventType}s/?page=${page}`;
            }
            console.log('EVENT LIST      ', defaultUrl);

            const res = await fetch(defaultUrl);
            const fullAPI = await res.json();

            // now useless
            setState((prevState) => ({ ...prevState, fullAPI }));
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log('ERROR IN EVENT LIST', error);
        }
    }, [params.page, currentLanguage, props.eventType, props.page, props.queryString]);
    // [] mounting by initialization once

    const renderEvents = () => {
        const eventsList = state.fullAPI.results;

        return eventsList.map((item) => (
            <EventTemplate
                title={item.title}
                description={item.short_description}
                identificat={item.id}
                link={item.url}
                tags={item.tags}
                eventType={props.eventType}
                image={item.main_image}
            />
        ));
    };

    return (
        <main>
            <div>
                <ul>{renderEvents()}</ul>
                <Pagination
                    totalPages={state.fullAPI.total_pages}
                    next={state.fullAPI.next}
                    previous={state.fullAPI.previous}
                    currentPage={
                        props.match && props.match.params.page
                            ? parseInt(props.match.params.page, 10)
                            : props.page
                    }
                />
            </div>
        </main>
    );
};

export default EventList;
