import { connect } from "react-redux";
import Cart from "../components/Cart";
import {
  deleteProductFromCart,
  updateProductInCart,
  completePurchase
} from "../action/ProductsAction";

const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapActionToProps = {
  deleteProductFromCart,
  updateProductInCart,
  completePurchase,
};

export default connect(mapStateToProps, mapActionToProps)(Cart);
