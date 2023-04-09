import {
    LOGIN_SUCCESS,
    LOGOUT,
} from "../actions/actionTypes.js";

const initialState = { isLoggedIn: false, userInfo: null };

export const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userInfo: payload,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null,
            };
        default:
            return state;
    }
}