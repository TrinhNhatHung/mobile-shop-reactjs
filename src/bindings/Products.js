import { connect } from "react-redux";
import Products from "../components/Products";
import {
  fetchProducts,
  addProductToCart,
  updateProductInCart
} from "../action/ProductsAction";

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
});

const mapActionToProps = { fetchProducts, addProductToCart,updateProductInCart };

export default connect(mapStateToProps, mapActionToProps)(Products);
