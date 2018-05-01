import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./small-spots.css";

import { smallSpots } from "../../data/small-spots";
import { SmallSpot } from "../small-spot/small-spot";
import { addToCart } from "../../actions/cart";

function isInCart(game, { products }) {
  return products.find(product => product.title === game.title);
}

class SmallSpots extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      products: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    }),
    addToCart: PropTypes.func.isRequired
  };

  render() {
    return (
      <section className="small-spots">
        {smallSpots.map(game => (
          <SmallSpot
            key={game.title}
            game={game}
            isInCart={isInCart(game, this.props.cart)}
            onAddClick={this.props.addToCart}
          />
        ))}
      </section>
    );
  }
}

function mapState({ cart }) {
  return {
    cart
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators(
    {
      addToCart
    },
    dispatch
  );
}

export default connect(mapState, mapDispatch)(SmallSpots);
