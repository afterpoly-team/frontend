import React, {Component} from "react";
import {Route} from "react-router";
import styles from "./Content.module.css";
import Event from "./Event";
import EventList from "./EventList";
import Home from "./Home";

const Content = () => {
    return (
        <div className={styles.cont}>
            <Route exact path="/events/:page" component={EventList}/>
            <Route path="/event/:id" component={Event}/>
            <Route exact path="/ru/api/real-life-events" component={Home} />
        </div>
    );
};

export default Content;
