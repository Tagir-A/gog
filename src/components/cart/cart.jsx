import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import pluralize from "pluralize";
import { bindActionCreators } from "redux";
import "./cart.css";
import { toggleCart, clearCart } from "../../actions/cart";
import { formatPrice } from "../../utils/formatters";

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
          {products.map(item => (
            <div className="cart__product">
              <img src={item.img} alt={item.title} className="product__img" />
              <div className="product__info">
                <h4 className="product__info__game-title">{item.title}</h4>
                <button
                  className="product__info__btn"
                  onClick={e => this.handleRemoveClick(e, item.title)}
                >
                  Remove
                </button>
              </div>
              <h6 className="product__price">
                {item.price.value / item.price.minorUnits}
              </h6>
            </div>
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
      clearCart
    },
    dispatch
  );
}

export default connect(mapState, mapDispatch)(Cart);
