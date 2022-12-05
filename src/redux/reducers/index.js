import { combineReducers } from "redux";
import { usersReducer } from "../reducers/usersReducer";
import { userByIdReducer } from "../reducers/userByIdReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  userbyid: userByIdReducer
});