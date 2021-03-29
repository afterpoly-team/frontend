import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Content.css";
import { useLanguage } from "../context/Language"
import { getLanguage } from "../utils/getLanguage" 

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
  eventsList: [],
};
// const obj = { a: 1, b: 2 };

// const { b } = obj;

const EventList = (props) => {
  const { language } = useLanguage();
  const currentLanguage = getLanguage(language);

  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8000/api/events/");
      const eventsList = await res.json();

      setState((prevState) => ({ ...prevState, eventsList }));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  const renderEvents = () => {
    const { eventsList } = state;

    return eventsList.map((item) => (
      <li key={item.id}>
        <p>
          {currentLanguage.title}:
          {item.title}
        </p>
        <p>
          <a href={item.link} className="aa">
            {currentLanguage.organizers}
          </a>
        </p>
        <Link to={`/events/${item.id}`} href={item.url} className="aa">
          {currentLanguage.linkToEvent}
        </Link>
      </li>
    ));
  };

  return (
    <main>
      <div>
        <ul>{renderEvents()}</ul>
      </div>
    </main>
  );
};

export default EventList;
