import { ProductsActionTypes, productType, SELECT_PRODUCT, SET_CATEGORY, SET_PRODUCTS, SET_PRODUCT_BY_ID, START_LOADING } from './../actions/products';

export interface ProductsState {
   products: productType[]
   isLoading: boolean
   categories: string[]
   activeCategory: string
   selectedProductId?: number
}

const initialState: ProductsState = {
   products: [],
   isLoading: true,
   categories: ['Показать все', 'men clothing', 'jewelery', 'electronics', 'women clothing'],
   activeCategory: 'Показать все'
}

export const productsReducer = (state = initialState, action: ProductsActionTypes): ProductsState => {
   switch (action.type) {
      case SET_PRODUCTS: {
         return {
            ...state,
            products: action.payload as productType[],
            isLoading: false
         }
      }
      case START_LOADING: {
         return {
            ...state,
            isLoading: true
         }
      }
      case SET_PRODUCT_BY_ID: {
         const product = action.payload as productType
         return {
            ...state,
            isLoading: false,
            products: state.products.map(el => el.id === product.id ? product : el)
         }
      }
      case SET_CATEGORY: {
         return {
            ...state,
            activeCategory: action.payload as string
         }
      }
      case SELECT_PRODUCT: {
         return {
            ...state,
            selectedProductId: action.payload as number
         }
      }
      default:
         return state
   }
}