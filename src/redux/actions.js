export const addTodo = (data) => ({
  type: "todoList/addTodo",
  payload: data,
});

export const changeStatus = (id) => ({
  type: "todoList/changeStatus",
  payload: id,
});

export const searchFilter = (text) => ({
  type: "filters/searchFilter",
  payload: text,
});

export const priorityFilter = (priorities) => ({
  type: "filters/priorityFilter",
  payload: priorities,
});

export const statusFilter = (status) => ({
  type: "filters/statusFilter",
  payload: status,
});
