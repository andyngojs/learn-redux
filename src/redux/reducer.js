import { combineReducers } from "redux";
import filterSlice from "../components/Filters/filterSlice";
import todosSlice from "../components/TodoList/todosSlice";

const rootReducer = combineReducers({
  filters: filterSlice,
  todoList: todosSlice,
});

export default rootReducer;
