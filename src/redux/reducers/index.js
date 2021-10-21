import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, addToCartReducer } from "./productReducer";
//Root Reducer
const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
    cartProducts:addToCartReducer
})
export default reducers