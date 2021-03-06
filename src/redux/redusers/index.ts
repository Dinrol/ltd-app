import { combineReducers } from "redux";
import { productsReducer } from "./products";

export const rootReducer = combineReducers({ productsReducer })

export type RootState = ReturnType<typeof rootReducer>