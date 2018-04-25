import React, { Component } from 'react';
import logo from './assets/logo-classic.svg';
import cartIco from './assets/ico-cart.svg'
import './App.css';
import { smallSpots } from './data/small-spots';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="menu">
          <div className="menu__container">
            <a className='menu__logo'/>
            <button className="cart-btn">
              <img src={cartIco}/>
            </button>
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
                <button className="small-spot__btn">
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
}

export default App;
