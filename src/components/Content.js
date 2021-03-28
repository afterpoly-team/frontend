import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router";
import { Link, NavLink } from "react-router-dom";
import "./Content.css";
import Event from "./Event";
import EventList from "./EventList";
import Home from "./Home";

class Content extends Component {
  render() {
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
}

export default Content;
