import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Content.css";

import { useLanguage } from "../../context/LanguageTranslator";
import { getLanguage } from "../../utils/getLanguage";

const initialState = {
  currentUrl: null,
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

  // * if the curUrl from localStore is with wrong language prefix,
  // * it returns the new correct url
  const resolveUrls = (eventsUrl, currentUrl) => {
    let currentUrlPure = currentUrl.substring(0, eventsUrl.length);
    let result = currentUrl.replace(currentUrlPure, eventsUrl);
    return result;
  };

  useEffect(async () => {
    try {
      setLoading(true);
      const langUrl = currentLanguage.urlName;
      const defaultUrl = `http://localhost:8000/${langUrl}/api/events/`;
      // * url which we will fetch
      let currentUrl;

      // * if the inc/dec buttons were clicked, we resolve new curUrl
      if (localStorage.getItem("curUrl")) {
        currentUrl = localStorage.getItem("curUrl");
        currentUrl = resolveUrls(defaultUrl, currentUrl);
      } else {
        currentUrl = defaultUrl;
      }
      const res = await fetch(currentUrl);
      const fullAPI = await res.json();

      console.log("USE EFFECT USED");
      setState((prevState) => ({ ...prevState, fullAPI, currentUrl }));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  const renderEvents = () => {
    const eventsList = state.fullAPI.results;

    console.log("STATE:", state);
    // console.log("LIST:", eventsList);
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

  const inc = () => {
    let currentUrl = state.currentUrl;
    if (state.fullAPI.next) {
      currentUrl = state.fullAPI.next;
    }
    setState((prevState) => ({ ...prevState, currentUrl }));
    localStorage.setItem("curUrl", currentUrl);
    window.location.reload();
  };

  const dec = () => {
    let currentUrl = state.currentUrl;
    if (state.fullAPI.previous) {
      currentUrl = state.fullAPI.previous;
    }
    setState((prevState) => ({ ...prevState, currentUrl }));
    localStorage.setItem("curUrl", currentUrl);
    window.location.reload();
  };

  return (
    <main>
      <div>
        <ul>{renderEvents()}</ul>
        <button onClick={dec}>-1</button>
        <button onClick={inc}>+1</button>
      </div>
    </main>
  );
};

export default EventList;
