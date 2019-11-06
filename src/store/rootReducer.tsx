import { combineReducers } from 'redux';
import  users, { getAllUsers as getUsers, getEditUser as getEdit }  from './users/index';

export default combineReducers({
    users,
});

export const getAllUsers = (state: any) => getUsers(state.users);
export const getEditUser = (state: any) => getEdit(state.users);