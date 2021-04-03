import React, { useState } from "react";
import { useLanguage } from "../context/Language";
import { Route, useHistory } from "react-router";

const Language = () => {
  const { language, setLanguage } = useLanguage();
  const history = useHistory();
  console.log(language);

  return (
    <Route
      render={({ history }) => (
        <select
          value={language}
          onChange={(event) => {
            // ! reloads but forces value to default
            // history.go(0);

            // ! reloads but forces value to default
            // let currentUrl = window.location.pathname;
            // history.push(currentUrl);
            // window.location.reload(false);

            // ! reloads but forces value to default
            // localStorage.setItem('langSelect', event.target.value);
            // window.location.reload(false);
            // setLanguage(localStorage.getItem('langSelect'));

            // * works fine but redirect
            history.push("/");

            // *setting language
            setLanguage(event.target.value);
          }}
        >
          <option value="Rus">Русский</option>
          <option value="Eng">English</option>
          <option value="Fr">Français</option>
        </select>
      )}
    />
  );
};

export default Language;
