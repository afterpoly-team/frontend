import React, { useState, useEffect } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';

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
            const langUrl = currentLanguage.urlName;
            const page = props.match.params.page;
            const eventType = props.eventType;

            const defaultUrl = `http://localhost:8000/${langUrl}/api/${eventType}s/?page=${page}`;

            const res = await fetch(defaultUrl);
            const fullAPI = await res.json();

            // now useless
            setState((prevState) => ({ ...prevState, fullAPI }));
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }, [params.page, currentLanguage]);
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
                    currentPage={parseInt(props.match.params.page, 10)}
                />
            </div>
        </main>
    );
};

export default EventList;
