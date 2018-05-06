import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { SmallSpot } from "../small-spot/small-spot";
import "./small-spots.css";
import game from "../../models/game";

class SmallSpots extends Component {
  static propTypes = {
    cart: PropTypes.shape({
      products: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired
        })
      )
    }),
    games: PropTypes.arrayOf(game),
    addToCart: PropTypes.func.isRequired
  };

  render() {
    const { games } = this.props;
    return (
      <section className="small-spots">
        {games.map(game => (
          <SmallSpot
            key={game.title}
            game={game}
            isInCart={true}
            onAddClick={this.props.addToCart}
          />
        ))}
      </section>
    );
  }
}

export { SmallSpots };
