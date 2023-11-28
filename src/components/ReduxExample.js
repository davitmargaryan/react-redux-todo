import { useState } from "react";
import store from "../reduxOld/store";

const ReduxExample = () => {
  debugger;
  const state = store.getState();
  const count = state.count;
  const dispatch = store.dispatch;
  const [asd, setAsd] = useState(true);
  const [value, setValue] = useState("");

  const onReduxStoreChanged = (a, b) => {
    debugger;
    setAsd(!asd);
  };

  store.subscribe(onReduxStoreChanged);

  const increment = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const decrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const setSelectedValue = () => {
    debugger;
    dispatch({
      type: "CUSTOM_VALUE",
      payload: +value,
    });
  };

  return (
    <div style={{ marginBottom: 100, padding: 20, border: "1px solid black" }}>
      <button onClick={decrement}>decrement</button>
      <span>count : {count}</span>
      <button onClick={increment}>increment</button>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={setSelectedValue}>set selected value</button>
    </div>
  );
};

export default ReduxExample;
