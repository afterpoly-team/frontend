import React, { useState, useEffect } from "react";
<<<<<<< HEAD:src/components/Content/ContentComponents/Event.js
import "../Content.css";
import { useLanguage } from "../context/Language"
import { getLanguage } from "../utils/getLanguage" 
=======
import "./Content.css";
import { useLanguage } from "../context/Language";
import { getLanguage } from "../utils/getLanguage";
>>>>>>> 4b3e858dd691bc946070a584d78d1ecf3a75eab9:src/components/Event.js

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
      const id = props.match.params.id;
      const res = await fetch(`http://localhost:8000/api/events/${id}`);
      const result = await res.json();

      setState((prevState) => ({ ...prevState, result }));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

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
