import * as actionTypes from './shopping-types';

// Reducer is just a function, that take state, action
const initialState = {
    products: [], //{id, title, description, price, img }
    cart: [], // {id, title, description, price, img, qty}
    currentItem: null
}
const shopReducer = (state = initialState, action) => { // here data comming from `shopping-actions.js`
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return { ...state,  products: action.payload.allProducts}
        case actionTypes.ADD_TO_CART:
                //  get items data from the products array!

                // console.log("state.products ===> ", state.products) // We are getting this from our existing redux store.
                const item = state.products.find(product => product._id === action.payload.id)
                
                // Check if the item already in cart then adjust qty
                const inCart = state.cart.find(item => item._id === action.payload.id ? true : false);

        return {
            ...state, cart: inCart ? state.cart.map(item => item._id === action.payload.id ? {...item, qty: item.qty + 1} : item) : [...state.cart, {...item, qty:1}]
        }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state, 
                cart:state.cart.filter(item => item._id !== action.payload.id)
            }
        case actionTypes.ADJUST_QTY:
            console.log("action.payload.qty ===> ", action.payload, " type ===>", typeof +action.payload.qty)
            return {
                ...state,
                cart: state.cart.map(item => item._id === action.payload.id ?  {...item, qty : +action.payload.qty} : item)
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state, 
                currentItem:action.payload
            }
        default:
            return state;
    }
}

export default shopReducer
