import {
    createAction,
    ActionType,
    createReducer
  } from 'typesafe-actions';

// Declare Types
const GOOGLE_SIGN_IN = 'GOOGLE_SIGN_IN';
const FACEBOOK_SIGN_IN = 'FACEBOOK_SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';


export const googleLogin = createAction(GOOGLE_SIGN_IN)<any>();
export const facebookLogin = createAction(FACEBOOK_SIGN_IN)<any>();
export const logout = createAction(SIGN_OUT)();


// Type for Actions 
const actions = { googleLogin, facebookLogin, logout };
type LogInAction = ActionType<typeof actions>;


type signedInUser = Object | null;  

// Initial State
const initialState: signedInUser = null;  

const isLogged = createReducer<signedInUser, LogInAction>(initialState, {
    [GOOGLE_SIGN_IN]: (state, action) => (action.payload),
    [FACEBOOK_SIGN_IN]: (state, action) => (action.payload),
    [SIGN_OUT]: state => null
  });

export default isLogged;