import allUsersReducer from './userReducer';

import { combineReducers } from 'redux';

export default combineReducers({
    all: allUsersReducer
});

export const getAllUsers = (state: any) => state.all;