import * as actions from './actions';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import * as Interface from '../../utils/Types';
import * as http from '../../utils/Paths';
import { async } from 'q';


const requestHeaders: HeadersInit = new Headers();
requestHeaders.set('Content-Type', 'application/json');

export const requestAllUsersAction = () => ({
    type: actions.REQUEST_ALL_USERS,
});

export const receiveAllUsersAction = (users: any) => ({
    type: actions.RECEIVE_ALL_USERS,
    users,
});

export const rejectAllUsersAction = (errorMessage: any) => ({
    type: actions.REJECT_ALL_USERS,
    errorMessage
});

export const fetchAllUsersAction = () => {
    return  (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(requestAllUsersAction() );
        try {
            fetch(http.HTTP_PATH, {
                method: 'GET',            
                headers: requestHeaders,  
            })
            .then((response)=>{
                return response.json();
            })
            .then((data: any)=>{

                dispatch(receiveAllUsersAction(data))
            })
        }
        catch(error) {
            dispatch(rejectAllUsersAction(error.message) );
        }
    }  
};

export const requestAddNewUserAction = () => ({
    type: actions.REQUEST_ADD_USER

});

export const requestReceiveNewUserAction = (user: Interface.IUser) => ({
    type: actions.REQUEST_RECEIVE_NEW_USER,
    user
});

export const rejectNewUserAction = (error: string) => ({
    type: actions.REQUEST_REJECT_NEW_USER,
    error,
});

export const addNewUserAction = (user: any) => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(requestAddNewUserAction() );
        try {
                fetch(http.HTTP_PATH, {
                method: 'POST',            
                headers: requestHeaders,
                body: JSON.stringify(user),  
            })
            .then((response)=>{
                return response.json();
            })
            .then((data: any)=>{

                dispatch(requestReceiveNewUserAction(data))
            })

        } catch(error) {
            dispatch(rejectNewUserAction(error.message));

        }
    }
}

export const requestUserAction = () =>({
    type: actions.REQUEST_USER
});

export const receiveUserAction = (user: Interface.IUser) => ({
    type: actions.RECEIVE_USER,
    user
});

export const rejectUserAction = (error: string) => ({
    type: actions.REJECT_USER,
    error
});

export const fetchUserAction = (id: string) => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(requestUserAction());
        try {
            fetch(http.HTTP_PATH+'/'+id, {
                method: 'GET',
                headers: requestHeaders,
            })
            .then((response) => {
                return response.json();
            })
            .then((data: any) => {
                dispatch(receiveUserAction(data))
            })
        }
        catch(error) {
            dispatch(rejectUserAction(error.message));
        }
    }
}

export const requestEditAction = () => ({
    type: actions.REQUEST_EDIT_USER
});

export const receiveEditAction = (user: Interface.IUser) => ({
    type: actions.RECEIVE_EDIT_USER,
    user
});

export const rejectEditAction = (error: string) => ({
    type: actions.REJECT_EDIT_USER,
    error
});

export const editUserAction = (user: Interface.IUser) => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch( requestEditAction());
        try{
            fetch(http.HTTP_PATH+'/'+user._id, {
                method: 'PUT',
                headers: requestHeaders,
                body: JSON.stringify(user),
            })
            .then((response) => {
                return response.json();
            })
            .then((data: any)=> {
                dispatch(receiveEditAction(data));
            })
        }
        catch(error) {
            dispatch(rejectEditAction(error.message))
        }
    }
};

export const requestDeleteAction = () => ({
    type: actions.REQUEST_DELETE_USER
});

export const receiveDeleteAction = ( _id: string) => ({
    type: actions.RECEIVE_DELETE_USER,
    _id
});

export const rejectDeleteUser = (error: string) => ({
    type: actions.REJECT_DELETE_USER,
    error
});

export const deleteUserAction = (_id: string) => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch( requestDeleteAction());
        try {
            fetch(http.HTTP_PATH+'/'+_id, {
                method: 'DELETE',
                headers: requestHeaders,
            })
            .then((resposne) => {
                return resposne.json()
            })
            .then((data) => {
                dispatch(receiveDeleteAction(_id));
            })
        }
        catch(error) {
            dispatch(rejectDeleteUser(error.message))
        }
    }
}





