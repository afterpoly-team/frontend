import React, { Component } from "react";
import { Route } from "react-router";
import styles from "./Content.module.css";
import Event from "./Event";
import EventList from "./EventList";
import Home from "./Home";
import EventTemplate from "./EventTemplate";

const Content = () => {
  return (
    <div className={styles.cont}>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/events/:page" component={EventList} />
        <Route path path="/event/:id" component={Event} />
      </div>
    </div>
  );
};

export default Content;
