import actionTypes from "./actionTypes.js"

export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS,
})

export const userLoginSuccess = (userInfo) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    payload: userInfo
})

export const userLoginFail = () => ({
    type: actionTypes.ADMIN_LOGIN_FAIL,
})

export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT,
})


