import {ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART} from "./constant";

export const addToCart = (data) => {
    console.warn("addToCart ", data)
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeFromCart = (data) => {
    console.warn("removeFromCart ", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const clearCart = () => {
    console.warn("clearCart ")
    return {
        type: CLEAR_CART,
    }
}
