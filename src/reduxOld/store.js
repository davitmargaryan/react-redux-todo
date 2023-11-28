import { createStore } from "redux";

const initialStale = {
  count: 0,
};

function reducer(state, action) {
  debugger;
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case "CUSTOM_VALUE": {
      return {
        ...state,
        count: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer, initialStale);

window.store = store;

export default store;
