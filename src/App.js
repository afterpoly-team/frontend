import React from "react";
import styles from "./App.module.css";
import "./components/Header/Header.module.css";
import Header from "./components/Header/Header";
import SlideBar from "./components/Navbar/SlideBar";
import Content from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";
import {LanguageProvider} from "./context/LanguageTranslator";

const App = (props) => {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <div className={styles.wrapper}>
                    <Header/>
                    <Content/>
                </div>
                <SlideBar/>
            </BrowserRouter>
        </LanguageProvider>
    );
};

export default App;
