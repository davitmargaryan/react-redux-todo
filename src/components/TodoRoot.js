import React from "react";
import Header from "./Header";
import List from "./List";
import Filter from "./Filter";

const TodoRoot = () => {
  return (
    <div>
      <Header />
      <Filter />
      <List />
    </div>
  );
};

export default TodoRoot;
