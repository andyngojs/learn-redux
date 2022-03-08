// const initState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };

// export default function filterReducer(state = initState, action) {
//   switch (action.type) {
//     case "filters/searchFilter":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/statusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filters/priorityFilter":
//       return {
//         ...state,
//         priorities: action.payload,
//       };
//     default:
//       return state;
//   }
// }

import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFilter: (state, action) => {
      state.search = action.payload;
    },
    statusFilter: (state, action) => {
      state.status = action.payload;
    },
    priorityFilter: (state, action) => {
      state.priorities = action.payload;
    },
  },
});

export default filtersSlice;
