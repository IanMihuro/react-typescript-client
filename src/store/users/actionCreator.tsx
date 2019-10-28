import * as actions from './actions';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

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

        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set('Content-Type', 'application/json');

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

    
}



