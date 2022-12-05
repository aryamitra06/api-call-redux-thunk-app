import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
} from "../constants/userConstants";

const initialState = {
    users: [],
    loading: true,
    error: false
}
export const userReducer = (state = initialState, action) => {
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