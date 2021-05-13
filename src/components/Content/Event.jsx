import React, { useState, useEffect } from 'react';
import './Content.module.css';
import { useLanguage } from '../../context/LanguageTranslator';
import { getLanguage } from '../../utils/getLanguage';
import Tag from './Tag';
import {
    NOT_FOUND_IMAGE,
    NOT_FOUND_IMAGE_LOCAL,
    IMG_PLACEHOLDER_FRONT,
} from '../../consts/Constants';

const initialState = {
    result: {
        url: '',
        id: '',
        title: '',
        description: '',
        short_description: '',
        link: '',
        tags: [],
        organizers: '',
        additional_information: '',
        main_image: '',
        background_image: '',
        creation_date: '',
        list_of_dates: [],
    },
};

const Event = (props) => {
    const { language } = useLanguage();
    const currentLanguage = getLanguage(language);

    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const [tagList, setTagList] = useState([]);

    useEffect(async () => {
        try {
            setLoading(true);
            const langUrl = currentLanguage.urlName;
            const id = props.match.params.id;
            const eventType = props.eventType;

            const res = await fetch(
                `http://localhost:8000/${langUrl}/api/${eventType}s/${id}`
            );
            const result = await res.json();

            setTagList(result.tags);
            console.log(result.tags);
            console.log(tagList);

            setState((prevState) => ({ ...prevState, result }));
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }, [currentLanguage.urlName]);

    const renderTags = () => {
        if (tagList !== undefined) {
            return tagList.map((item) => (
                <ul>
                    <Tag tagId={item} />
                </ul>
            ));
        }
    };

    const renderDates = () => {
        const datesList = state.result.list_of_dates;
        if (datesList !== undefined && datesList.length > 0) {
            return datesList.map((item) => <ul>{item}</ul>);
        }
        // else{
        //     return
        //     <span>
        //         {currentLanguage.noDatesAvaliable}
        //     </span>
        // }
    };

    const renderEvent = () => {
        const { result } = state;

        return (
            <div>
                <h2>{result.title}</h2>
                <p>
                    {currentLanguage.creationDate}:{' '}
                    {new Date(result.creation_date).toLocaleDateString()}
                </p>
                <p>
                    {currentLanguage.description}: {result.description}
                </p>
                <p>
                    {currentLanguage.organizers}:{result.organizers}
                </p>
                <p>
                    {currentLanguage.aditionalInformation}:
                    {result.additional_information}
                </p>

                <p>
                    {currentLanguage.link}:{' '}
                    <a href={result.link} className="aa">
                        {result.link}
                    </a>
                </p>
                <p>
                    {currentLanguage.dates}:<ol>{renderDates()}</ol>
                </p>
                <img
                    src={
                        result.main_image === NOT_FOUND_IMAGE_LOCAL
                            ? IMG_PLACEHOLDER_FRONT
                            : result.main_image
                    }
                    alt="1"
                    height="500"
                    width="700"
                />
                <ol>{renderTags()}</ol>
            </div>
        );
    };

    return (
        <main>
            <div>{renderEvent()}</div>
        </main>
    );
};

export default Event;
