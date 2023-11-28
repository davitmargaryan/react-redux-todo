import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleItem } from "../redux/todoItems";

const Item = ({ id, title, checked }) => {
  const dispatch = useDispatch();

  const onRemove = () => {
    dispatch(removeTodo(id));
  };
  const onToggle = () => {
    dispatch(toggleItem(id));
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ textDecoration: checked ? "line-through" : "unset" }}
        onClick={onToggle}
      >
        {title}
      </div>
      <button onClick={onRemove}>X</button>
    </div>
  );
};

export default Item;
