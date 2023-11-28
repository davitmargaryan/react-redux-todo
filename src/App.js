import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import TodoRoot from "./components/TodoRoot";
import ReduxExample from "./components/ReduxExample";

function App() {
  return (
    <Provider store={store}>
      <ReduxExample />
      <TodoRoot />
    </Provider>
  );
}

export default App;
