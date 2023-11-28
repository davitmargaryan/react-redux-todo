import React from "react";
import {
  ALL_ITEMS_FILTER,
  CHECKED_ITEMS_FILTER,
  UNCHECKED_ITEMS_FILTER,
} from "../constants/filter";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  selectSearchValue,
  setFilter,
  setSearch,
} from "../redux/filter";

const Filter = () => {
  const filter = useSelector(selectFilter);
  const searchValue = useSelector(selectSearchValue);
  const dispatch = useDispatch();

  const onAllClick = () => dispatch(setFilter(ALL_ITEMS_FILTER));
  const onCheckedClick = () => dispatch(setFilter(CHECKED_ITEMS_FILTER));
  const onUncheckedClick = () => dispatch(setFilter(UNCHECKED_ITEMS_FILTER));

  const onSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div>
      <div>
        {" "}
        <input
          placeholder="Search ..."
          value={searchValue}
          onChange={onSearchChange}
        />{" "}
      </div>
      <button
        style={{ fontWeight: filter === ALL_ITEMS_FILTER ? 900 : 400 }}
        onClick={onAllClick}
      >
        All
      </button>
      <button
        style={{ fontWeight: filter === CHECKED_ITEMS_FILTER ? 900 : 400 }}
        onClick={onCheckedClick}
      >
        Checked
      </button>
      <button
        style={{ fontWeight: filter === UNCHECKED_ITEMS_FILTER ? 900 : 400 }}
        onClick={onUncheckedClick}
      >
        Unchecked
      </button>
    </div>
  );
};

export default Filter;
