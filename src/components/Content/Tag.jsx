import React, { useState, useEffect } from 'react';
import './Content.module.css';
import { useLanguage } from '../../context/LanguageTranslator';
import { getLanguage } from '../../utils/getLanguage';

const initialState = {
    result: {
        url: '',
        id: '',
        name: '',
    }
};

const Tag = (props) => {
    const { language } = useLanguage();
    const currentLanguage = getLanguage(language);

    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        try {
            setLoading(true);
            const langUrl = currentLanguage.urlName;
            // const url = props.match.params.tagUrl;
            const id = props.tagId;
            const res = await fetch(
                `http://localhost:8000/${langUrl}/api/tags/${id}`
            );
            const result = await res.json();

            setState((prevState) => ({ ...prevState, result }));
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }, [currentLanguage.urlName]);

    const renderTag = () => {
        console.log(state);
        return <span>{state.result.name}</span>;
    };

    return (
        <main>
            <div>{renderTag()}</div>
        </main>
    );
};

export default Tag;
