import React, { useState, useEffect } from "react";
import "./Content.module.css";
import { useLanguage } from "../../context/LanguageTranslator";
import { getLanguage } from "../../utils/getLanguage";

const initialState = {
  result: {
    url: "",
    id: "",
    title: "",
    creation_date: "",
    description: "",
    event_date: "",
    link: "",
  },
};

const Event = (props) => {
  const { language } = useLanguage();
  const currentLanguage = getLanguage(language);

  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    try {
      setLoading(true);
      const langUrl = currentLanguage.urlName;
      const id = props.match.params.id;
      const res = await fetch(
        `http://localhost:8000/${langUrl}/api/events/${id}`
      );
      const result = await res.json();

      setState((prevState) => ({ ...prevState, result }));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [currentLanguage.urlName]);

  const renderEvent = () => {
    const { result } = state;

    return (
      <div>
        <h2>{result.title}</h2>
        <p>
          {currentLanguage.description}: {result.description}
        </p>
        <p>
          {currentLanguage.date}:{" "}
          {new Date(result.event_date).toLocaleDateString()}
        </p>
        <p>
          {currentLanguage.link}:{" "}
          <a href={result.link} className="aa">
            {result.link}
          </a>
        </p>
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
