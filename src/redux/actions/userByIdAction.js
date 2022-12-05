import axios from "axios";
import {
    GET_USER_BY_ID_REQUEST,
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_FAIL
} from "../constants/types";

export const userByIdAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_USER_BY_ID_REQUEST });
        const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        dispatch({ type: GET_USER_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_USER_BY_ID_FAIL });
    }
};