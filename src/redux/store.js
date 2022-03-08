// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import logger from "./logger";

// const store = createStore(logger(rootReducer));

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filterSlice";
import todoListSlice from "../components/TodoList/todosSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;
