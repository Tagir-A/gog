import React, { Component } from "react";
import "./menu.css";
import logo from "../../assets/logo-classic.svg";
import Cart from "../../containers/cart/cart";

class Menu extends Component {
  render() {
    return (
      <header className="menu">
        <div className="menu__container">
          <a className="menu__logo" href="https://www.gog.com/">
            <img src={logo} alt="main page link" />
          </a>
          <Cart />
        </div>
      </header>
    );
  }
}

export { Menu };
