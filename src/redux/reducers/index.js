import { combineReducers } from "redux";
import userReducers from "./users";

const Reducers = combineReducers({
  users: userReducers,
});

export default Reducers;
