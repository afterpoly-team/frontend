import React, { useState } from "react";
import { useLanguage } from "../context/Language";
import { Route } from "react-router";

const Language = () => {
  const { language, setLanguage } = useLanguage();

  console.log(language);

  // handleChange();

  return (
    // <button
    //   type='button'
    //   onClick={() => { history.push('/new-location') }}
    // >
    //   Click Me!
    // </button>
    <Route
      render={({ history }) => (
        <select
          value={language}
          onChange={(event) => {
            history.push("/");
            // location.reload();
            // window.history.push("http://localhost:3000/");
            // window.history.push("/");
            setLanguage(event.target.value);
            // window.location.reload(false);
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
