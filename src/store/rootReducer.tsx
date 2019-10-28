import { combineReducers } from 'redux';
import  users, { getAllUsers as getUsers }  from './users/index';

export default combineReducers({
    users,
});

export const getAllUsers = (state: any) => getUsers(state.users);