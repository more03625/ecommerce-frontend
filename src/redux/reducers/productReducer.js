import { actionTypes } from "../constants/action-types";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}
export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.SELECTED_PRODUCTS:
            return { ...state, ...payload };
        case actionTypes.REMOVE_SELECTED_PRODUCTS:
            return {}
        default:
            return state;
    }
}
export const addToCartReducer = (state = [], { type, payload }) => {
    switch (type) {
        case actionTypes.ADD_TO_CART:
            return [ ...state, {cartProducts: payload} ]
        default:
            return state;
    }
}
export const addProductReducer = (cartData = {}, { type, payload }) => {
    console.log("addProductReducer ===> ", "type ===> ", type, "payload ===> ", payload)
}