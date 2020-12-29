import { Dispatch } from 'redux';
import { productsAPI } from './../../API/api';

export const SET_PRODUCTS: string = "SET_PRODUCTS"
export const SET_PRODUCT_BY_ID: string = "SET_PRODUCT_BY_ID"
export const START_LOADING: string = "START_LOADING"
export const SET_CATEGORY: string = "SET_CATEGORY"
export const SELECT_PRODUCT: string = "SELECT_PRODUCT"
export const SET_PRODUCTS_BY_SEARCH: string = "SET_PRODUCTS_BY_SEARCH"
export const SET_CURRENT_PAGE: string = "SET_CURRENT_PAGE"

export type productType = {
   id: number
   title: string
   price: number
   description: string
   category: string
   image: string
}

export interface startLoading {
   type: typeof START_LOADING
}

export interface selectProduct {
   type: typeof SELECT_PRODUCT,
   payload: number
}

export interface selectIdType {
   type: typeof START_LOADING,
   payload: number
}
export interface categoryType {
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

export interface productBySearch {
   type: typeof SET_PRODUCTS_BY_SEARCH,
   payload: string
}

export interface setCurrenPageType {
   type: typeof SET_CURRENT_PAGE,
   payload: number
}

export type ProductsActionTypes =
   productsAllType
   | productByIdType
   | selectIdType
   | categoryType
   | selectProduct
   | productBySearch
   | setCurrenPageType;

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

export const setProductsByCategory = (category: string) => async (dispatch: Dispatch<productsAllType | categoryType | startLoading>) => {
   dispatch({ type: START_LOADING })
   let response = await productsAPI.getCategoryProducts(category)
   dispatch({ type: SET_PRODUCTS, payload: response })
   dispatch(setCategory(category))
}

export const setProductsBySearch = (userList: productType[], searchValue: string) => (dispatch: Dispatch<productBySearch | productsAllType>) => {
   dispatch({ type: SET_PRODUCTS_BY_SEARCH, payload: searchValue })
   dispatch({ type: SET_PRODUCTS, payload: userList })
}

export const setCurrentPage = (page: number) => (dispatch: Dispatch<setCurrenPageType>) => {
   dispatch({ type: SET_CURRENT_PAGE, payload: page })
}