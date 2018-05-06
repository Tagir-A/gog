import React, { Component } from "react";
import "./small-spot.css";
import { formatPrice } from "../../utils/formatters";
import game from "../../models/game";

class SmallSpot extends Component {
  static propTypes = {
    game: game.isRequired
  };

  render() {
    const { game } = this.props;
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
              ? this.renderOwnedBtn()
              : game.isInCart
                ? this.renderInCartBtn()
                : this.renderAddBtn(game)}
          </div>
        </div>
      </div>
    );
  }
  renderAddBtn(game) {
    const {
      price: { value, minorUnits }
    } = game;
    const priceToShow = value / minorUnits;
    return (
      <button className="btn small-spot__btn" onClick={this.handleAddToCart}>
        {formatPrice(priceToShow)}
      </button>
    );
  }
  renderOwnedBtn() {
    return (
      <button
        className="btn small-spot__btn small-spot__btn--disabled"
        disabled>
        OWNED
      </button>
    );
  }

  renderInCartBtn() {
    return (
      <button className="btn small-spot__btn" disabled>
        IN CART
      </button>
    );
  }

  handleAddToCart = () => {
    const { onAddClick, game } = this.props;
    onAddClick && onAddClick(game);
  };
}

export { SmallSpot };
