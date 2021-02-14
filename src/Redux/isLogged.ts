// Declare Types
const GOOGLE_SIGN_IN = 'GOOGLE_SIGN_IN' as const;
const FACEBOOK_SIGN_IN = 'FACEBOOK_SIGN_IN' as const;
const SIGN_OUT = 'SIGN_OUT' as const;


// Action functions
export const googleLogin = (userData : any) => {
    return {
        type: GOOGLE_SIGN_IN,
        payload: userData
    };
}

export const facebookLogin = (userData : any) => {
    return {
        type: FACEBOOK_SIGN_IN,
        payload: userData
    };
}

export const logout = () => {
    return {
        type: SIGN_OUT,
        payload: null
    };
}


// Type for Actions 
type Actions =
  | ReturnType<typeof googleLogin>
  | ReturnType<typeof facebookLogin>
  | ReturnType<typeof logout>;


type signedInUser = Object | null;  

// Initial State
const initialState: signedInUser = null;  

// Reducer
const isLogged = (state: signedInUser = initialState, action:Actions) => {
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

export default isLogged;