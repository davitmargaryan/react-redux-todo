import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import { selectTodoItems } from "../redux/todoItems";
import { selectFilter, selectSearchValue } from "../redux/filter";
import {
  ALL_ITEMS_FILTER,
  CHECKED_ITEMS_FILTER,
  UNCHECKED_ITEMS_FILTER,
} from "../constants/filter";

const List = ({ remove, toggle }) => {
  const items = useSelector(selectTodoItems);
  const filter = useSelector(selectFilter);
  const searchValue = useSelector(selectSearchValue);

  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const itemsFilteredBySearchValue = items.filter((i) =>
      i.title.includes(searchValue)
    );
    if (filter === ALL_ITEMS_FILTER) {
      setFilteredItems(itemsFilteredBySearchValue);
    } else if (filter === CHECKED_ITEMS_FILTER) {
      setFilteredItems(itemsFilteredBySearchValue.filter((i) => i.checked));
    } else if (filter === UNCHECKED_ITEMS_FILTER) {
      setFilteredItems(itemsFilteredBySearchValue.filter((i) => !i.checked));
    }
  }, [items, filter, searchValue]);

  return (
    <div>
      {filteredItems.map((item) => (
        <Item key={item.id} {...item} remove={remove} toggle={toggle} />
      ))}
    </div>
  );
};

export default List;
