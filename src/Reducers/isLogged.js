const loggedReducer = (state=null, action) => {
    switch(action.type) {
        case 'GOOGLE_SIGN_IN':
            return action.payload;

        case 'FACEBOOK_SIGN_IN':
            return action.payload;

        case 'SIGN_OUT':
            return action.payload;
        default:
            return state;
    }
}

export default loggedReducer;