import {takeEvery, put} from 'redux-saga/effects'
import {PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST} from "./constant";

function* getProducts() {
    console.warn("getProducts saga called ")
    let data = yield fetch('http://localhost:8080/products')
    data = yield data.json()
    console.warn("getProducts saga ", data)
    yield put({type: SET_PRODUCT_LIST, data})
}

function* searchProducts(data) {
    console.warn("getProducts saga called ")
    let result = yield fetch(`http://localhost:8080/products?q=${data.query}`)
    result = yield result.json()
    console.warn("getProducts saga ", result)
    yield put({type: SET_PRODUCT_LIST, data:result})
}

export default function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
}
