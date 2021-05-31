import axios from "axios";
import * as Type from "../constants/ActionType";
import { config } from "../config/config";
import * as Message from "../constants/Message";

export const fetchProducts = (page, limit) => {
  return async (dispatch) => {
    const param = {
      _page: page,
      _limit: limit,
    };
    const queryString = require("query-string");
    const stringified = queryString.stringify(param);
    const res = await axios.get(`${config.api.products}?${stringified}`);
    dispatch(setProducts(res.data));
  };
};

export const setProducts = (products) => ({
  type: Type.SET_PRODUCT,
  products,
});

export const changeMessage = (content) => ({
  type: Type.CHANGE_MESSAGE,
  content,
});

export const addProductToCart = (productId) => {
  return async (dispatch) => {
    const res = await axios.get(`${config.api.products}/${productId}`);
    const product = res.data;
    dispatch(changeMessage(Message.ADD_CART_SUCCESS));
    return dispatch({
      type: Type.ADD_PRODUCT_TO_CART,
      productInCart: {
        ...product,
        quantity: 1,
      },
    });
  };
};

export const updateProductInCart = (atId, functional) => {
  return (dispatch) => {
    dispatch(changeMessage(Message.UPDATE_CART_SUCCESS));
    return dispatch({
      type: Type.UPDATE_PRODUCT_IN_CART,
      atId,
      functional,
    });
  };
};

export const deleteProductFromCart = (atId) => {
  return (dispatch) => {
    dispatch(changeMessage(Message.DELETE_CART_SUCCESS));
    return dispatch({
      type: Type.DELETE_PRODUCT_IN_CART,
      atId,
    });
  };
};

export const completePurchase = (listCarts) => {
  return async (dispatch) => {
    var queryString = "";
    var outOfProduct = [];
    listCarts.forEach((element) => {
       queryString += `id=${element.id}&`;
    });

    queryString = queryString.substring(0, queryString.length -1);
    const res = await axios.get(`${config.api.products}?${queryString}`);
    console.log(res.data);
    const listCartsFetch  = res.data;
    listCarts.forEach(element => {
        let elementFetch = listCartsFetch.find(product => product.id === element.id);
        if (element.quantity > elementFetch.inventory){
          outOfProduct.push(elementFetch);
        }
    });

    if (outOfProduct.length > 0) {
      var message = "";
      outOfProduct.forEach((element) => {
        message += element.name + ",";
      });
      message = message.substring(0, message.length - 1) + " đã hết hàng";
      dispatch(changeMessage(message));
    } else if (outOfProduct.length === 0) {
      listCarts.forEach(async (element) => {
        await axios.put(`${config.api.products}/${element.id}`, {
          name: element.name,
          image: element.image,
          description: element.description,
          price: element.price,
          inventory: element.inventory - element.quantity,
          rating: element.rating,
        });
      });
      dispatch(changeMessage(Message.COMPLETE_PURCHASE));
      return dispatch({
        type: Type.COMPLETE_PURCHASE,
      });
    } else {
      dispatch(changeMessage(Message.FAIL_PURCHASE));
    }
  };
};

export const changePage = (page) => ({
  type: Type.CHANGE_PAGE,
  page,
});

export const setTotalProducts = () => {
  return async (dispatch) => {
    const res = await axios.get(config.api.products);
    return dispatch({
      type: Type.SET_TOTAL_PRODUCTS,
      total: res.data.length,
    });
  };
};
