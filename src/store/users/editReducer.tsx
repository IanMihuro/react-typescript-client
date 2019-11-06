import * as actions from './actions';

const editMeta = {
    isLoading: true,
    error: '',
    success: ''
};

const initialEditState = {
    user: {},
    editMeta
};

const handleRequestUser = (state: any) => ({
    ...state,
    editMeta: {
        ...editMeta,
        isLoading: true
    }
});

const handleRecieveUser = (state: any, action: any) => {
    return {
        user: action.user ,
        editMeta: {
            ...editMeta,
            isLoading: false
        }
    }
};

const handleRejectUser = (state: any, action: any) => ({
    ...state,
    editMeta: {
        ...editMeta,
        error: action.error
    }
});

const handleRequestEdit = (state: any) => ({
    ...state,
    editMeta: {
        ...editMeta,
        isLoading: true
    }
});

const handleReceiveEdit = (state: any, action: any) => {
    return {
        user: action.user,
        editMeta: {
            ...editMeta,
            isLoading: false,
            success: 'Edit was successful'
        }
    }
};

const handleRejectEdit = (state: any, action: any) => ({
    ...state,
    editMeta: {
        isLoading: false,
        error: action.error,
        success: ''
    }
});

const editReducer = (state = initialEditState, action: any) => {
    switch(action.type) {
        case actions.REQUEST_USER:
            return handleRequestUser(state);
        case actions.RECEIVE_USER:
            return handleRecieveUser(state, action);
        case actions.REJECT_USER:
            return handleRejectUser(state, action);

        case actions.REQUEST_EDIT_USER:
            return handleRequestEdit(state);
        case actions.RECEIVE_EDIT_USER:
            return handleReceiveEdit(state, action);
        case actions.REJECT_EDIT_USER:
            return handleRejectEdit(state, action);
        
        default:
            return state;

    }
}

export default editReducer;