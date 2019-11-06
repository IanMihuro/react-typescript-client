import allUsersReducer from './userReducer';
import editReducer from './editReducer';

import { combineReducers } from 'redux';

export default combineReducers({
    all: allUsersReducer,
    edit: editReducer,
});

export const getAllUsers = (state: any) => state.all;
export const getEditUser = (state: any) => state.edit;