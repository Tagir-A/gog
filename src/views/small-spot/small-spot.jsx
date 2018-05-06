import React, { Component } from "react";
import PropTypes from "prop-types";
import "./small-spot.css";
import { formatPrice } from "../../utils/formatters";
import game from "../../models/game";

function SmallSpot({ game, onAddClick }) {
  const handleAddToCart = () => {
    onAddClick && onAddClick(game);
  };
  function renderAddBtn(game) {
    const {
      price: { value, minorUnits }
    } = game;
    const priceToShow = value / minorUnits;
    return (
      <button className="btn small-spot__btn" onClick={handleAddToCart}>
        {formatPrice(priceToShow)}
      </button>
    );
  }
  function renderOwnedBtn() {
    return (
      <button
        className="btn small-spot__btn small-spot__btn--disabled"
        disabled>
        OWNED
      </button>
    );
  }

  function renderInCartBtn() {
    return (
      <button className="btn small-spot__btn" disabled>
        IN CART
      </button>
    );
  }

  return (
    <div className="small-spot">
      <img src={game.img} alt={game.title} className="small-spot__image" />
      <div className="small-spot__info">
        <h3 className="small-spot__info__title">{game.title}</h3>
        <div className="small-spot__btns">
          {game.discount && (
            <div className="small-spot__discount">{`-${game.discount}%`}</div>
          )}
          {game.owned
            ? renderOwnedBtn()
            : game.isInCart
              ? renderInCartBtn()
              : renderAddBtn(game)}
        </div>
      </div>
    </div>
  );
}

SmallSpot.propTypes = {
  game: game.isRequired,
  onAddClick: PropTypes.func.isRequired
};

export { SmallSpot };
