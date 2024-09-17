import React from "react";
import { useContext } from "react";
import { counterContext } from "../context/context";

const Button = () => {
  //   console.log("button count is " + count);
  const value = useContext(counterContext);

  return (
    <div>
      {" "}
      <button onClick={() => value.setCount((count) => count + 1)}>
        count is: {value.count}
      </button>
    </div>
  );
};

export default Button;
