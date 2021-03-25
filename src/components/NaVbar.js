import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

let NaVbar = () => {
  return (
    <div className="nav">
      <ul type="none">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/events/">Мероприятия</NavLink>
        </li>
        <li>
          <NavLink to="#s">Личный кабинет</NavLink>
        </li>
        <li>
          <NavLink to="#s">Контакты</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NaVbar;
