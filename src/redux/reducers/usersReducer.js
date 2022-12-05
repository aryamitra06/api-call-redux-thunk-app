import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
} from "../constants/types";

const initialState = {
    users: [],
    loading: false,
    error: false
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USERS_REQUEST:
        return { users: [], loading: true, error: false };
  
      case GET_USERS_SUCCESS:
        return { users: action.payload, loading: false, error: false };
  
      case GET_USERS_FAIL:
        return { users: [], loading: false, error: true };
  
      default:
        return state;
    }
  };