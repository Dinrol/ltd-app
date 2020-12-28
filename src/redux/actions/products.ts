import { Dispatch } from 'redux';
import { productsAPI } from './../../API/api';

export const SET_PRODUCTS: string = "SET_PRODUCTS"
export const SET_PRODUCT_BY_ID: string = "SET_PRODUCT_BY_ID"
export const START_LOADING: string = "START_LOADING"
export const SET_CATEGORY: string = "SET_CATEGORY"
export const SELECT_PRODUCT: string = "SELECT_PRODUCT"

export type startLoading = {
   type: typeof START_LOADING
}

export type selectProduct = {
   type: typeof SELECT_PRODUCT,
   payload: number
}

export type selectIdType = {
   type: typeof START_LOADING,
   payload: number
}
export type categoryType = {
   type: typeof SET_CATEGORY,
   payload: string
}

export interface productsAllType {
   type: typeof SET_PRODUCTS,
   payload: productType[]
}
export interface productByIdType {
   type: typeof SET_PRODUCT_BY_ID,
   payload: productType
}
export type productType = {
   id: number
   title: string
   price: number
   description: string
   category: string
   image: string
}

export type ProductsActionTypes = productsAllType | productByIdType | selectIdType | categoryType | selectProduct;

export const setProducts = () => async (dispatch: Dispatch<productsAllType>) => {
   let response = await productsAPI.getAllProducts()
   dispatch({ type: SET_PRODUCTS, payload: response })
}

export const selectProduct = (productId: number) => (dispatch: Dispatch<selectProduct>) => {
   dispatch({ type: SELECT_PRODUCT, payload: productId })
}

export const setProductsById = (id: number) => async (dispatch: Dispatch<productByIdType | selectIdType | startLoading>) => {
   dispatch({ type: START_LOADING })
   let response = await productsAPI.getProductById(id)
   dispatch({ type: SET_PRODUCT_BY_ID, payload: response })
}

export const setCategory = (category: string) => ({
   type: SET_CATEGORY, payload: category
})

export const setCategoryProducts = (category: string) => async (dispatch: Dispatch<productsAllType | categoryType | startLoading>) => {
   dispatch({ type: START_LOADING })
   let response = await productsAPI.getCategoryProducts(category)
   dispatch({ type: SET_PRODUCTS, payload: response })
   dispatch(setCategory(category))
}
