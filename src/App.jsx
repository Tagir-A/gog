import React, { Component } from 'react';
import logo from './assets/logo-classic.svg';
import cartIco from './assets/ico-cart.svg'
import './App.css';
import { smallSpots } from './data/small-spots';

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
            className="cart-btn"
            onClick={this.handleCartClick}
            >
              <img src={cartIco}/>
              {products.length}
            </button>
            { isOpen && this.renderCart() }
          </div>
        </header>
        <div className="container">
        <section className="big-spot">
        <h3 className="big-spot__title">GAME OF THE WEEK</h3>
        <button className="big-spot__btn"></button>
        </section>
        <section className="small-spots">
        {smallSpots.map(game => (
          <div className="small-spot">
            <img src={game.img} alt={game.title} className="small-spot__image"/>
            <div className="small-spot__info">
              <h3 className="small-spot__info__title">{game.title}</h3>
              <div className="small-spot__btns">
                <button
                className="small-spot__btn"
                onClick={(e) => this.handleAddToCart(e,game)}
                >
                { game.price.value / game.price.minorUnits }
                </button>
              </div>
            </div>
          </div>
        ))}
        </section>
        </div>
      </div>
    );
  }

  renderCart() {
    const {cart:{products}} = this.state
    return (
      <div className="cart">
        <div className="cart__info">
        <h4 className="cart__info__quantity">
          {`${products.length} items in cart`}
        </h4>
        <h4 className="cart__info__price">
          { products.reduce((totalPrice, item)=> totalPrice+= item.price.value / item.price.minorUnits, 0)}
        </h4>
        <button
        className="cart__info__btn cart__info__btn--clear"
        onClick={this.handleClearCart}
        >
          CLEAR CART
        </button>
        </div>
        <div className="cart__content">
          {products.map(item=> (
            <h4 className="cart__content__game-title">{item.title}</h4>
          ))}
        </div>
      </div>
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

}

export default App;
