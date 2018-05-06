import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import pluralize from "pluralize";
import "./cart.css";
import { formatPrice } from "../../utils/formatters";
import { CartProduct } from "./cart-product/cart-product";
import game from "../../models/game";

class Cart extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(game).isRequired,
    isOpen: PropTypes.bool,
    toggleCart: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
  };

  render() {
    const { products, isOpen } = this.props;
    return (
      <Fragment>
        <button className="btn btn--cart" onClick={this.handleCartClick}>
          <div className="cart-icon" />
          {products.length}
        </button>
        {isOpen && this.renderCartContent()}
      </Fragment>
    );
  }

  renderCartContent() {
    const { products } = this.props;
    const l = products.length;
    const totalPrice = products.reduce(
      (totalPrice, item) =>
        (totalPrice += item.price.value / item.price.minorUnits),
      0
    );
    return (
      <div className="cart">
        <div className="cart__info">
          <h4 className="cart__info__quantity">
            {`${l} ${pluralize("item", l)} in cart`}
          </h4>
          <h4 className="cart__info__price">{formatPrice(totalPrice)}</h4>
          <button
            className="btn cart__info__btn cart__info__btn--clear"
            onClick={this.handleClearCart}
          >
            CLEAR CART
          </button>
        </div>
        <div className="cart__content">
          {products.map(product => (
            <CartProduct
              key={product.title}
              product={product}
              onRemoveClick={this.props.removeFromCart}
            />
          ))}
        </div>
      </div>
    );
  }

  handleCartClick = () => {
    this.props.toggleCart();
  };

  handleClearCart = () => {
    this.props.clearCart();
  };
}

export { Cart };
