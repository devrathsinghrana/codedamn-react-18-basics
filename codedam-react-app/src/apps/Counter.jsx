import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Counter APP</h1>
      <button onClick={decrement}>decrement</button>
      <span>{counter}</span>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Counter;
