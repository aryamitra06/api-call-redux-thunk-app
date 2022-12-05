import {
    GET_USER_BY_ID_REQUEST,
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_FAIL
} from "../constants/types";

const initialState = {
    user: [],
    loading: false,
    error: false
}

export const userByIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_BY_ID_REQUEST:
            return { user: [], loading: true, error: false };

        case GET_USER_BY_ID_SUCCESS:
            return { user: action.payload, loading: false, error: false };

        case GET_USER_BY_ID_FAIL:
            return { user: [], loading: false, error: true };

        default:
            return state;
    }
};