export const login = (userData) => {
    return {
        type: 'SIGN_IN',
        payload: userData
    };
}