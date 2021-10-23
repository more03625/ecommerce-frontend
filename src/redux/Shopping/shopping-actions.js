import * as actionTypes from './shopping-types';

// These function will be dispatched to our Reducer with out `string identifier`
export const setProducts = (items) => { // These function will go to Reducer with data in return statement!
    return {
        type:actionTypes.SET_PRODUCTS,
        payload:{
            allProducts:items
        }
    }
}
export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const adjustQty = (itemID, value) => {
    console.log("itemID ===> ", itemID)
    console.log("value ===> ", value)
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty:value
        }
    }
}

export const loadCurrentItem = (item) => {
    return{
        type:actionTypes.LOAD_CURRENT_ITEM,
        payload:item
    }
}