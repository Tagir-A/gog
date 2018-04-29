import React, { Component } from "react";
import pluralize from "pluralize";
import logo from "./assets/logo-classic.svg";
import cartIco from "./assets/ico-cart.svg";
import "./App.css";
import Menu from "./components/menu/menu";
import { formatPrice } from "./utils/formatters";
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
    const {
      cart: { isOpen, products }
    } = this.state;
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

  handleCartClick = () => {
    const { cart } = this.state;
    const nextCart = {
      ...cart,
      isOpen: !cart.isOpen
    };
    this.setState({ cart: nextCart });
  };

  handleAddToCart = (e, game) => {
    const { cart } = this.state;
    const nextProducts = [...cart.products, game];
    const nextCart = {
      ...cart,
      products: nextProducts
    };
    this.setState({ cart: nextCart });
  };

  handleClearCart = () => {
    const nextCart = {
      ...this.state.cart,
      products: []
    };
    this.setState({ cart: nextCart });
  };

  handleRemoveClick = (e, title) => {
    const { cart } = this.state;
    const nextProducts = cart.products.filter(item => item.title != title);
    const nextCart = {
      ...cart,
      products: nextProducts
    };
    this.setState({ cart: nextCart });
  };
}

export default App;
