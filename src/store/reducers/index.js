import { combineReducers } from 'redux';
import { userReducer } from "./userReducer.js";

export const rootReducer = combineReducers({
    user: userReducer,
})




