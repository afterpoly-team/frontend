import React from "react";
import "./App.css";
import "./components/Header.css";
import Header from "./components/Header";
import NaVbar from "./components/NaVbar";
import Content from "./components/Content";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/Language";

const App = (props) => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <NaVbar />
          <Content />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
