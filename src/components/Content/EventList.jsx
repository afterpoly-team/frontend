import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Content.css";

import { useLanguage } from "../../context/LanguageTranslator";
import { getLanguage } from "../../utils/getLanguage";

const initialState = {
  fullAPI: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
};
//* const obj = { a: 1, b: 2 };

//* const { b } = obj;

const EventList = (props) => {
  const { language } = useLanguage();
  const currentLanguage = getLanguage(language);

  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    try {
      setLoading(true);
      const langUrl = currentLanguage.urlName;
      const defaultUrl = `http://localhost:8000/${langUrl}/api/events/`;
      // * url which we will fetch
      let currentUrl;

      localStorage.clear();

      currentUrl = defaultUrl;

      const res = await fetch(currentUrl);
      const fullAPI = await res.json();

      setState((prevState) => ({ ...prevState, fullAPI }));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  const renderEvents = () => {
    const eventsList = state.fullAPI.results;

    return eventsList.map((item) => (
      <li key={item.id}>
        <p>
          {currentLanguage.title}:{item.title}
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
