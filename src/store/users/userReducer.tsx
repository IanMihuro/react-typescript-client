import *  as actions from './actions';

const meta = {
    isFetching: false,
    errorMessage: '',
}
const allUsersInitailState = {
    users: []
}

const handleRequestAllUsers = (state: any) => ({
    ...state,
    meta: {
        ...meta,
        isFettching: true
    }
});

const handleRecieveAllUsers = (_:any, action: any) => {
    return {
        users: action.users,
        meta: {
            ...meta,
            isFetching: false,
        }
    }

}

const handleAllUsersRequestError = (state: any,action: any) =>({
    ...state,
    meta: {
        ...meta,
        errorMessage: action.errorMessage
    }
})

const AllUsersReducer = (state = allUsersInitailState, action: any) => {
    switch(action.type) {
        case actions.REQUEST_ALL_USERS:
            return handleRequestAllUsers(state);
        case actions.RECEIVE_ALL_USERS:
            return handleRecieveAllUsers(state, action);
        case actions.REJECT_ALL_USERS:
            return handleAllUsersRequestError(state, action);
        
        default:
            return state;

    }
}

export default AllUsersReducer;