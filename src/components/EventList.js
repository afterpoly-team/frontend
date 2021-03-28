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
        
        <Link to={`/events/${item.id}`} className="aa">
          To this event
        </Link>
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
