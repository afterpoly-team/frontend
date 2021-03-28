import React, { Component } from "react";
import "./Content.css";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {
        url: "",
        id: "",
        title: "",
        creation_date: "",
        description: "",
        event_date: "",
        link: "",
      },
    };
  }
  async componentDidMount() {
    try {
      //   let PREFIX = "http://localhost:3000/events/";
      //   console.log("OBRATI VNIMANIEEEEEEEEEEEEEE");
      //   console.log(this.props);
      //   const id = window.location.href.substr(
      //     window.location.href.lastIndexOf(PREFIX) + PREFIX.length - 1
      //   );

      const id = this.props.match.params.id;
      console.log(id);

      const res = await fetch(`http://localhost:8000/api/events/${id}`);
      const event = await res.json();

      this.setState({
        result: event,
      });

      //   console.log(this.state.result);
    } catch (error) {
      console.log(error);
    }
  }

  renderEvent = () => {
    const newEvent = this.state.result;

    return (
      <div>
        <h2>{newEvent.title}</h2>
        <p>Описание: {newEvent.description}</p>
        <p>Дата: {new Date(newEvent.event_date).toLocaleDateString()}</p>
        <p>
          Ссылка:{" "}
          <a href={newEvent.link} className="aa">
            {newEvent.link}
          </a>
        </p>
        <h2>ЭТО ИВЕНТ</h2>
      </div>
    );
  };

  render() {
    return (
      <main>
        <div>{this.renderEvent()}</div>
      </main>
    );
  }
}

export default Event;
