import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { SmallSpot } from "../small-spot/small-spot";
import "./small-spots.css";
import game from "../../models/game";

function SmallSpots({ games, addToCart }) {
  return (
    <section className="small-spots">
      {games.map(game => (
        <SmallSpot key={game.title} game={game} onAddClick={addToCart} />
      ))}
    </section>
  );
}

SmallSpots.propTypes = {
  cart: PropTypes.shape({
    products: PropTypes.arrayOf(game)
  }),
  games: PropTypes.arrayOf(game),
  addToCart: PropTypes.func.isRequired
};

export { SmallSpots };
