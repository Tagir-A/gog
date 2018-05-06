import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { cartActions } from "../../state/ducks/cart";
import { Cart } from "../../views/cart/cart";

function mapState({ cart: { products, isOpen } }) {
  return {
    products,
    isOpen
  };
}

function mapDispatch(dispatch) {
  const { toggleCart, clearCart, removeFromCart } = cartActions;
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
