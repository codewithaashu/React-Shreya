import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>Welcome to Shreya Singh Tutorial {counter}</h1>
      <h2>Counter value: {counter} </h2>
      <div>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
      <p>The counter is : {counter}</p>
    </div>
  );
}

export default App;
