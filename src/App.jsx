import React, { Component } from 'react';
import pluralize from 'pluralize'
import logo from './assets/logo-classic.svg';
import cartIco from './assets/ico-cart.svg'
import './App.css';
import { smallSpots } from './data/small-spots';

function isInCart(game, {cart:{products}}) {
  return products.find(product=> product.title == game.title)
}

class App extends Component {
  state = {
    cart: {
      products: [],
      isOpen: false
    }
  }

  render() {
    const {cart:{isOpen, products}} = this.state
    return (
      <div className="app">
        <header className="menu">
          <div className="menu__container">
            <a className='menu__logo'/>
            <button
            className="btn btn--cart"
            onClick={this.handleCartClick}
            >
              <div className='cart-icon'/>
              {products.length}
            </button>
            { isOpen && this.renderCart() }
          </div>
        </header>
        <div className="container">
        <section className="big-spot">
        <h3 className="big-spot__title">GAME OF THE WEEK</h3>
        <button className="btn big-spot__btn"></button>
        </section>
        {this.renderSmallSpots()}
        </div>
      </div>
    );
  }

  renderCart() {
    const {cart:{products}} = this.state
    const l = products.length
    return (
      <div className="cart">
        <div className="cart__info">
        <h4 className="cart__info__quantity">
          {`${l} ${pluralize('item',l)} in cart`}
        </h4>
        <h4 className="cart__info__price">
          { products.reduce((totalPrice, item)=> totalPrice+= item.price.value / item.price.minorUnits, 0)}
        </h4>
        <button
        className="btn cart__info__btn cart__info__btn--clear"
        onClick={this.handleClearCart}
        >
          CLEAR CART
        </button>
        </div>
        <div className="cart__content">
          {products.map(item=> (
            <div className="cart__product">
            <img src={item.img} alt={item.title} className="product__img"/>
            <div className="product__info">
              <h4 className="product__info__game-title">{item.title}</h4>
              <button
                className="product__info__btn"
                onClick={(e) => this.handleRemoveClick(e,item.title)}
              >
                Remove
              </button>
            </div>
            <h6 className="product__price">{item.price.value / item.price.minorUnits}</h6>
            </div>
          ))}
        </div>
      </div>
    )
  }

  renderSmallSpots() {
    return (
      <section className="small-spots">
      { smallSpots.map(game => (
        <div className="small-spot">
          <img src={ game.img } alt={ game.title } className="small-spot__image"/>
          <div className="small-spot__info">
            <h3 className="small-spot__info__title">{game.title}</h3>
            <div className="small-spot__btns">
            {game.discount && (
              <div className="small-spot__discount">
                {`-${game.discount}%`}
              </div>
            )}
            { game.owned ? this.renderOwnedBtn() :
              isInCart(game, this.state) ? this.renderInCartBtn() :
              this.renderAddBtn(game)}
            </div>
          </div>
        </div>
      ))}
      </section>
    )
  }

  renderAddBtn(game) {
    return (
            <button
              className="btn small-spot__btn"
              onClick={(e) => this.handleAddToCart(e,game)}
            >
              { game.price.value / game.price.minorUnits }
            </button>
    )
  }

  renderOwnedBtn() {
    return (
      <button
      className="btn small-spot__btn small-spot__btn--disabled"
      disabled
      >
        OWNED
      </button>
    )
  }

  renderInCartBtn(){
    return (
      <button
      className="btn small-spot__btn"
      disabled
      >
        IN CART
      </button>
    )
  }

  handleCartClick = () => {
    const {cart} = this.state
    const nextCart = {
      ...cart,
      isOpen: !cart.isOpen
    }
    this.setState({cart: nextCart})
  }

  handleAddToCart = (e,game) => {
    const {cart} = this.state
    const nextProducts = [...cart.products, game]
    const nextCart = {
      ...cart,
      products: nextProducts
    }
    this.setState({cart: nextCart})
  }

  handleClearCart = () => {
    const nextCart = {
      ...this.state.cart,
      products: []
    }
    this.setState({cart: nextCart})
  }

  handleRemoveClick = (e, title) => {
    const {cart} = this.state
    const nextProducts = cart.products.filter(item => item.title != title)
    const nextCart = {
      ...cart,
      products: nextProducts
    }
    this.setState({cart: nextCart})
  }

}

export default App;
