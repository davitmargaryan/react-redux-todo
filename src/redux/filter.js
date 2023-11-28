import { createSlice } from "@reduxjs/toolkit";
import { ALL_ITEMS_FILTER } from "../constants/filter";

const initialState = {
  search: "",
  filterValue: ALL_ITEMS_FILTER,
};

export const filterSlice = createSlice({
  name: "todoItems",
  initialState,
  reducers: {
    setFilter: (state, { payload: filter }) => {
      state.filterValue = filter;
    },
    setSearch: (state, { payload: searchValue }) => {
      state.search = searchValue;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilter, setSearch } = filterSlice.actions;
export const selectFilter = (state) => state.filter.filterValue;
export const selectSearchValue = (state) => state.filter.search;

export default filterSlice.reducer;
