import axios from 'axios';
import * as Type from '../constants/ActionType';
import {config} from '../config/config';

export const fetchProductsAdmin = ()=> {
    return async (dispatch)=> {
        const res = await axios.get(config.api.products);
        dispatch(setProductsAdmin(res.data));
    }
}

export const setProductsAdmin = (products)=> ({
    type : Type.SET_PRODUCT_ADMIN,
    products
})

export const updateProductsAdmin = (product)=> {
    return  async (dispatch)=> {
        await axios.put(`${config.api.products}/${product.id}`, {
            ...product
        })
        dispatch(fetchProductsAdmin());
    }
}

export const deleteProductsAdmin = (productId)=> {
    return async (dispatch)=> {
        await axios.delete(`${config.api.products}/${productId}`);
        dispatch(fetchProductsAdmin());
    }
}