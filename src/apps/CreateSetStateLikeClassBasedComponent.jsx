import React, { useState } from "react";

const initialState = {
  counter1: 0,
  counter2: 0,
};

const CreateSetStateLikeClassBasedComponent = () => {
  const [counterObj, setCounterObj] = useState(initialState);

  const _setCounterObj = (newValue) => {
    setCounterObj((prevValue) => {
      return {
        ...prevValue,
        ...newValue,
      };
    });
  };

  return (
    <div>
      <button
        onClick={() => setCounterObj({ counter1: counterObj.counter1 + 1 })}
      >
        Increase counter 1 using normal setState
      </button>
      <button
        onClick={() => _setCounterObj({ counter1: counterObj.counter1 + 1 })}
      >
        Increase counter 1 using custom class like setState
      </button>
      <button onClick={() => _setCounterObj(initialState)}>Reset</button>
      <p>
        {`counter 1: ${counterObj.counter1} `}
        {`counter 2: ${counterObj.counter2}`}
      </p>
    </div>
  );
};

export default CreateSetStateLikeClassBasedComponent;
