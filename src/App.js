import React, { Component } from "react";
import "./App.css";
import "./components/Header.css";
import Header from "./components/Header";
import NaVbar from "./components/NaVbar";
import Content from "./components/Content";
import Event from "./components/Event";
import { BrowserRouter, Link, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <NaVbar />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
