import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import pluralize from "pluralize";
import { bindActionCreators } from "redux";
import "./cart.css";
import { toggleCart, clearCart, removeFromCart } from "../../actions/cart";
import { formatPrice } from "../../utils/formatters";
import { CartProduct } from "./cart-product/cart-product";

class Cart extends Component {
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

function mapState({ cart: { products, isOpen } }) {
  return {
    products,
    isOpen
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators(
    {
      toggleCart,
      clearCart,
      removeFromCart
    },
    dispatch
  );
}

export default connect(mapState, mapDispatch)(Cart);
