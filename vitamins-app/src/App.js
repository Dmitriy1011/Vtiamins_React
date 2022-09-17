import React from "react";
import './scss/common.scss';
import Header from './components/header/Header';
import Hero from "./components/hero/Hero";
import Background from "./components/background/Background";
import Order from "./components/order/Order";

function App() {
  return (
    <div className="app">
      <div className="top-wrapper">
        <Header />
        <Hero />
        <Background />
      </div>
      <Order />
    </div>
  );
}

export default App;
