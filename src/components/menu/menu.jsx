import React, { Component } from "react";
import "./menu.css";
import Cart from "../cart/cart";

class Menu extends Component {
  render() {
    return (
      <header className="menu">
        <div className="menu__container">
          <a className="menu__logo" href="https://www.gog.com/" />
          <Cart />
        </div>
      </header>
    );
  }
}

export default Menu;
