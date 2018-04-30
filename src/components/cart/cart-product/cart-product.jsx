import React, { Component } from "react";
import "./cart-product.css";

class CartProduct extends Component {
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
    onRemoveClick && onRemoveClick(product);
  };
}

export { CartProduct };
