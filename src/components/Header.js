import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoItems";

const Header = () => {
  const [itemTitle, setItemTitle] = useState("");

  const dispatch = useDispatch();

  const onChange = (e) => {
    setItemTitle(e.target.value);
  };

  const onAddClick = () => {
    dispatch(addTodo(itemTitle));
    setItemTitle("");
  };

  const onKeyDown = (e) => {
    if (e.code === "Enter") {
      dispatch(addTodo(itemTitle));
      setItemTitle("");
    }
  };
  return (
    <div>
      <input
        onKeyDown={onKeyDown}
        type="text"
        value={itemTitle}
        onChange={onChange}
      />
      <button onClick={onAddClick}>Add</button>
    </div>
  );
};

export default Header;
