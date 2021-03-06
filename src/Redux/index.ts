import { combineReducers } from 'redux';
import isLogged from './isLogged';

const rootReducer = combineReducers({
    isLogged
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;