import React, { Component } from "react";
import "./App.css";
import Menu from "./components/menu/menu";
import { BigSpot } from "./components/big-spot/big-spot";
import SmallSpots from "./components/small-spots/small-spots";

class App extends Component {
  state = {
    cart: {
      products: [],
      isOpen: false
    }
  };

  render() {
    return (
      <div className="app">
        <Menu />
        <div className="container">
          <BigSpot />
          <SmallSpots />
        </div>
      </div>
    );
  }
}

export default App;
