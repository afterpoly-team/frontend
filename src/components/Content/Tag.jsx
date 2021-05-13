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
            const id = props.tagId;
            console.log("TAG_ID_PROP:", props.tagId )

            const res = await fetch(
                `http://localhost:8000/${langUrl}/api/tags/${id}`
            );
            const result = await res.json();

            console.log("TAG_ID:", result.id, " TAG_NAME:", result.name )

            setState((prevState) => ({ ...prevState, result }));
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }, [currentLanguage.urlName]);

    const renderTag = () => {
        return (
            <div>
                <span>{state.result.name}</span>
            </div>
        )
    };

    return (
        <main>
            <div>{renderTag()}</div>
        </main>
    );
};

export default Tag;
