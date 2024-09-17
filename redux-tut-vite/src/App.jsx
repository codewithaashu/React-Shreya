import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { increment, decrement, multiply } from "./redux/counter/counterSlice";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Multiply value"
          onClick={() => dispatch(multiply())}
        >
          Multiply
        </button>
      </div>
    </>
  );
}

export default App;
