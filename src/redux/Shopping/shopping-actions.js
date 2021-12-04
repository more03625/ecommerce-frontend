import * as actionTypes from './shopping-types';

export const setProducts = (items) => { // These functions will go to Reducer with data in return statement!
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: {
            allProducts: items
        }
    }
}
export const addToCart = (itemID, qty) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
            qty:qty
        }
    }
}

export const removeFromCart = (itemID) => {
    console.log("itemID here===> ", itemID)
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const adjustQty = (itemID, value) => {

    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}