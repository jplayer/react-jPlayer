import {createStore, applyMiddleware} from "redux";
import reducer from "./reducers";
import promiseMiddleware from "redux-promise";

export default (initialState) => createStore(reducer, initialState, applyMiddleware(promiseMiddleware));