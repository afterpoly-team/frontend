import React, { Component } from "react";
import { Route } from "react-router";
import "./Content.css";
import Event from "./Event";
import EventList from "./EventList";
import Home from "./Home";

const Content = () => {
    return (
      <main>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/events/" component={EventList} />
          <Route path="/events/:id" component={Event} />
          <br />
        </div>
      </main>
    );
}

export default Content;
