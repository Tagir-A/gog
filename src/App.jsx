import React, { Component } from "react";
import "./App.css";
import { Menu } from "./views/menu/menu";
import { BigSpot } from "./views/big-spot/big-spot";
import SmallSpots from "./containers/small-spots/small-spots";

class App extends Component {
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
