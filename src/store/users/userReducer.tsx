import * as actions from "./actions";

const meta = {
  isFetching: false,
  errorMessage: "",
  successMessage: ""
};
const allUsersInitailState = {
  users: [],
  meta
};

const handleRequestAllUsers = (state: any) => ({
  ...state,
  meta: {
    ...meta,
    isFetching: true
  }
});

const handleRecieveAllUsers = (state: any, action: any) => {
  return {
    users: [...action.users, ...state.users],
    meta: {
      ...meta,
      isFetching: false
    }
  };
};

const handleAllUsersRequestError = (state: any, action: any) => ({
  ...state,
  meta: {
    ...meta,
    errorMessage: action.errorMessage
  }
});

const handleRequestAddUser = (state: any) => {
  console.log("add user reducer");
  return {
    ...state,
    meta: {
      ...meta,
      isFetching: true
    }
  };
};

const handleReceiveAddNewUser = (state: any, action: any) => {
  return {
    users: [...state.users, action.user],
    meta: {
      ...meta,
      isFetching: false,
      successMessage: "User was successfully added"
    }
  };
};

const handleAddNewUserError = (state: any, action: any) => ({
  ...state,
  meta: {
    ...meta,
    errorMessage: action.error
  }
});

const handleRequestDelete = (state: any) => ({
  ...state,
  meta: {
    ...meta,
    isFetching: true
  }
});

const handleReceiveDelete = (state: any, action: any) => {
  return {
    ...state,
    users: state.users.filter((user: any) => action._id !== user._id),
    meta: {
      ...meta,
      isFetching: false
    }
  };
};

const handleRejectDelete = (state: any, action: any) => ({
  ...state,
  meta: {
    ...meta,
    isFetching: false,
    errorMessage: action.error
  }
});

const AllUsersReducer = (state = allUsersInitailState, action: any) => {
  switch (action.type) {
    case actions.REQUEST_ALL_USERS:
      return handleRequestAllUsers(state);
    case actions.RECEIVE_ALL_USERS:
      return handleRecieveAllUsers(state, action);
    case actions.REJECT_ALL_USERS:
      return handleAllUsersRequestError(state, action);

    case actions.REQUEST_ADD_USER:
      return handleRequestAddUser(state);
    case actions.REQUEST_RECEIVE_NEW_USER:
      return handleReceiveAddNewUser(state, action);
    case actions.REQUEST_REJECT_NEW_USER:
      return handleAddNewUserError(state, action);

    case actions.REQUEST_DELETE_USER:
      return handleRequestDelete(state);
    case actions.RECEIVE_DELETE_USER:
      return handleReceiveDelete(state, action);
    case actions.REJECT_DELETE_USER:
      return handleRejectDelete(state, action);

    default:
      return state;
  }
};

export default AllUsersReducer;
