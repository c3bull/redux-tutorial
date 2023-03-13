import {ADD_TO_CART, CLEAR_CART, PRODUCT_LIST, REMOVE_FROM_CART, SET_PRODUCT_LIST} from "./constant";

export const productData = (data = [], action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            console.warn("productData ", action)
            return [...action.data]
        default:
            return data
    }
}
