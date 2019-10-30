import * as actions from './actions';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';


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

export const fetchAllUsersAction = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {

    return async  (dispatch: ThunkDispatch<{}, {}, AnyAction>):Promise<void> => {

        dispatch(requestAllUsersAction() );
        try {
             await fetch('http://localhost:3001/user', {
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

export const requestReceiveNewUserAction = (user: any) => ({
    type: actions.REQUEST_RECEIVE_NEW_USER,
    user
});

export const rejectNewUserAction = (error: string) => ({
    type: actions.REQUEST_REJECT_NEW_USER,
    error,
});

export const addNewUserAction = (user: any) => {
    return async  (dispatch: ThunkDispatch<{}, {}, AnyAction>):Promise<void> => {
        dispatch(requestAddNewUserAction() );
        try {
            await fetch('http://localhost:3001/user', {
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





