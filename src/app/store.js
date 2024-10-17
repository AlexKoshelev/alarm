import { applyMiddleware, combineReducers, createStore } from "redux";
import { alarmReducer } from "@/modules/alarm";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ alarm: alarmReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
