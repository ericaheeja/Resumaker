export const googleLogin = (userData) => {
    return {
        type: 'GOOGLE_SIGN_IN',
        payload: userData
    };
}

export const facebookLogin = (userData) => {
    return {
        type: 'FACEBOOK_SIGN_IN',
        payload: userData
    };
}

export const logout = (userData) => {
    return {
        type: 'SIGN_OUT',
        payload: userData
    };
}