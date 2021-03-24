import React, { Component } from 'react'
import './App.css';
import './components/Header.css'
import Header from './components/Header';
import NaVbar from './components/NaVbar';
import Content from './components/Content';


function App() {
  return (
    <div className = 'wrapper'>
      <Header />
      <NaVbar />
      <Content />
    </div>
  );
}

export default App;