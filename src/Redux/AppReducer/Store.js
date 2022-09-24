import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./reducer";

export const store = legacy_createStore(AppReducer, applyMiddleware(thunk));
