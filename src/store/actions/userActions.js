import actionTypes from './actionTypes';

export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS
})


export const userLoginSuccess = (userInfo) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    userInfo: userInfo
})

export const addArticle = (article) => {
    // returns an action
    return {
        type: 'ADD_ARTICLE',
        payload: article
    };
};


export const userLoginFail = () => ({
    type: actionTypes.ADMIN_LOGIN_FAIL
})

export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT
})

export const processLogin = () => ({
    type: actionTypes.USER_LOGIN_SUCCESS
})

