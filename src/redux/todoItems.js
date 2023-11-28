import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  items: [],
};

export const itemsSlice = createSlice({
  name: "todoItems",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      state.items.push({
        id: v4(),
        title: action.payload,
        checked: false,
      });
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    toggleItem: (state, action) => {
      state.items = state.items.map((i) =>
        i.id === action.payload ? { ...i, checked: !i.checked } : i
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, toggleItem } = itemsSlice.actions;
export const selectTodoItems = (state) => state.todoItems.items;

export default itemsSlice.reducer;
