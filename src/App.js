import React from "react";
import "./App.css";
import "./components/Header/Header.css";
import Header from "./components/Header/Header";
import NaVbar from "./components/Navbar/NaVbar";
import Content from "./components/Content/Content";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageTranslator";

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
