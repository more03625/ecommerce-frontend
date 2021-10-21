import { actionTypes } from "../constants/action-types";

export const setProducts = (products) => {
    return {
        type:actionTypes.SET_PRODUCTS,
        payload:products
    }
}
export const selectedProducts = (products) => {
    return {
        type:actionTypes.SELECTED_PRODUCTS,
        payload:products
    }
}
export const removeSelectedProduct = () => {    
    return {
        type:actionTypes.REMOVE_SELECTED_PRODUCTS
    }
}
export const addToCart = (product) => {
    return {
        type:actionTypes.ADD_TO_CART,
        payload:product
    }
}