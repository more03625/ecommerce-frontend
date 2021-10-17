import { adminActionTypes } from "../constants/action-types";

export const addProducts = (product) => {
    return {
        type:adminActionTypes.ADD_PRODUCTS,
        payload:product
    }
}