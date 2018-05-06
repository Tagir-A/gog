import React, { Component } from "react";
import PropTypes from "prop-types";
import "./cart-product.css";
import game from "../../../models/game";

class CartProduct extends Component {
  static propTypes = {
    product: game.isRequired,
    onRemoveClick: PropTypes.func.isRequired
  };
  render() {
    const { product } = this.props;
    return (
      <div className="cart__product">
        <img src={product.img} alt={product.title} className="product__img" />
        <div className="product__info">
          <h4 className="product__info__game-title">{product.title}</h4>
          <button
            className="product__info__btn"
            onClick={this.handleRemoveClick}
          >
            Remove
          </button>
        </div>
        <h6 className="product__price">
          {product.price.value / product.price.minorUnits}
        </h6>
      </div>
    );
  }

  handleRemoveClick = () => {
    const { onRemoveClick, product } = this.props;
    onRemoveClick(product);
  };
}

export { CartProduct };
