import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Home.module.css";

class Home extends Component {
  render() {
    return (
      <main>
        <div>
          <h2>Добро пожаловать на AfterPoly</h2>
          <NavLink to="/events/1" className={styles.link}>
            Мероприятия
          </NavLink>
        </div>
      </main>
    );
  }
}

export default Home;
