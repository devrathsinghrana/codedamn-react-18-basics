import React, { useState } from "react";

const lazilyInitializedFn = () => console.log("Hello world!");
const LazyInitializer = () => {
  //   const [randomNumber, setRandomNumber] = useState(lazilyInitializedFn);
  const [randomNumber, setRandomNumber] = useState(() => lazilyInitializedFn);
  return (
    <div>
      <p>LazyInitializer</p>
      <p>Random number is: {randomNumber}</p>
      <button
        onClick={() =>
          setRandomNumber((prev) => {
            console.log("prev>>>", prev);
            return Math.random();
          })
        }
      >
        Click me to generate random
      </button>
    </div>
  );
};

export default LazyInitializer;
