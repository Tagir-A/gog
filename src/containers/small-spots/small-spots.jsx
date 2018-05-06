import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./small-spots.css";

import { SmallSpots } from "../../views/small-spots/small-spots";

import { cartActions } from "../../state/ducks/cart";

function isInCart(game, { products }) {
  return products.find(product => product.title === game.title);
}

function mapState({ cart, games }) {
  return {
    cart,
    games
  };
}

function mapDispatch(dispatch) {
  const { addToCart } = cartActions;
  return bindActionCreators(
    {
      addToCart
    },
    dispatch
  );
}

export default connect(mapState, mapDispatch)(SmallSpots);
