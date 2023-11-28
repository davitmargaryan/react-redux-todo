import { configureStore } from "@reduxjs/toolkit";
import todoItems from "./todoItems";
import filter from "./filter";

export const store = configureStore({
  reducer: {
    todoItems,
    filter,
  },
});
