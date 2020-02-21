import { combineReducers } from "redux";
import comment from "./comment.js";
import repo from "./repo.js";

export default combineReducers({
    comment,
    repo
});
