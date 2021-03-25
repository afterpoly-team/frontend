import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router";
import { Link, NavLink } from "react-router-dom";
import "./Content.css";
import Event from "./Event";

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {
        url: "",
        title: "",
        creation_date: "",
        description: "",
        event_date: "",
        link: "",
      },
      eventsList: [],
    };
  }
  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:8000/api/events/");
      const eventsList_ = await res.json();
      this.setState({
        eventsList: eventsList_,
      });
    } catch (error) {
      console.log(error);
    }
  }

  getNewUrl = (url_to_event) => {
    var PREFIX = "http://localhost:8000/api/";
    let str1 = url_to_event.substr(
      url_to_event.lastIndexOf(PREFIX) + PREFIX.length - 1
    );

    let url = "http://localhost:3000" + str1;
    let id = url[url.length - 2];

    return url;
  };

  renderEvents = () => {
    const newEvents = this.state.eventsList;
    return newEvents.map((item) => (
      <li key={item.id}>
        <p>Название: {item.title}</p>
        <p>
          <a href={item.link} className="aa">
            Организаторы
          </a>
        </p>
        <a href={this.getNewUrl(item.url)} className="aa">
          To this event
        </a>
      </li>
    ));
  };

  render() {
    return (
      <main>
        <div>
          <ul>{this.renderEvents()}</ul>
        </div>
      </main>
    );
  }
}

export default EventList;
