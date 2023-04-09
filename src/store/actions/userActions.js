
import {
    LOGIN_SUCCESS,
    LOGOUT,
} from "./actionTypes.js";

export const userLoginSuccess = (userInfo) => {
    return {
        type: LOGIN_SUCCESS,
        payload: userInfo,
    }
};

export const processLogout = () => {
    return {
        type: LOGOUT,
    }
};
