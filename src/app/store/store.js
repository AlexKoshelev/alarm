import { applyMiddleware, combineReducers, createStore } from "redux";
import { alarmsReducer } from "./alarms/reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ alarms: alarmsReducer });
export const store = createStore(rootReducer, applyMiddleware(thunk));
