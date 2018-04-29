import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./small-spots.css";

import { smallSpots } from "../../data/small-spots";
import { SmallSpot } from "../small-spot/small-spot";

function isInCart(game, { products }) {
  return products.find(product => product.title == game.title);
}

class SmallSpots extends Component {
  render() {
    return (
      <section className="small-spots">
        {smallSpots.map(game => (
          <SmallSpot game={game} isInCart={isInCart(game, this.props.cart)} />
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
  return bindActionCreators({}, dispatch);
}

export default connect(mapState, mapDispatch)(SmallSpots);
