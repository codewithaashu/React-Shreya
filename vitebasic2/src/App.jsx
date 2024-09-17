import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("red");
  return (
    <div
      className=" h-screen w-full bg-red-600"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0">
        <div className="flex flex-wrap bg-white border rounded-full px-3 py-2 gap-5 ">
          <button
            onClick={() => setColor("yellow")}
            className="bg-green-400 px-2 py-1 rounded-full"
          >
            click me
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-blue-300 px-2  py-1 rounded-full"
          >
            click me
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
