import React, { useState } from "react";

const UPDATE_STATE = (val) => val + 1;

const CounterAppFunctionalStateUpdateWithSetTimeout = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCounter(UPDATE_STATE);
          setTimeout(() => setCounter(UPDATE_STATE), 1000);
          setTimeout(() => setCounter(UPDATE_STATE), 2000);
          setTimeout(() => setCounter(UPDATE_STATE), 3000);
        }}
      >
        Counter value : {counter}
      </button>
    </div>
  );
};

export default CounterAppFunctionalStateUpdateWithSetTimeout;
