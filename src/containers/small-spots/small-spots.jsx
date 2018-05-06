import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { SmallSpots } from "../../views/small-spots/small-spots";

import { cartActions } from "../../state/ducks/cart";
import { gamesSelectors } from "../../state/ducks/games";

function mapState({ cart, games }) {
  const { isInCart } = gamesSelectors;
  return {
    cart,
    games: games.map(game => ({ ...game, isInCart: isInCart(game, cart) }))
  };
}

function mapDispatch(dispatch) {
  const { addToCart } = cartActions;
  return bindActionCreators(
    {
      addToCart
    },
    dispatch
  );
}

export default connect(mapState, mapDispatch)(SmallSpots);
