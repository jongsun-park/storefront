import { combineReducers } from "redux";
import shopifyReducer from "./shopify";

const rootReducer = combineReducers({ shopify: shopifyReducer });

export default rootReducer;
