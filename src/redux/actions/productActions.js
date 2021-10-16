import { actionTypes } from "../constants/action-types";

export const setProducts = (products) => {
    return {
        key:actionTypes.SET_PRODUCTS,
        payload:products
    }
}
export const selectedProducts = (products) => {
    return {
        key:actionTypes.SELECTED_PRODUCTS,
        payload:products
    }
}
