import React, { useEffect, useState } from "react";

const initialState = {
  counter1: 0,
  counter2: 0,
};
const UseEffectComponent = () => {
  const [counterObj, setCounterObj] = useState(initialState);
  const [counter3, setCounter3] = useState(0);
  const obj = { hello: 1 };
  /*
    // this function executes in each component rerender without dependency array.
    useEffect(() => {
        console.log("Something wrong!");
    });
*/

  /*
    // this function executes in first component render or dependent state update.
    useEffect(() => {
        console.log("Something wrong!");
    },[counterObj]);
*/

  /*this will run on each component rerender as obj is newly created with different address on each component rerender and is different from previous one so, it's not recommended to pass custom object as state dependency

    useEffect(() => {
        console.log("Something wrong!");
    }, [obj]);
*/

  useEffect(() => {
    console.log("Something wrong 1!");
    //this cleanup function runs just before component rerenders due to dependent array state update or component unmounts not otherwise that is it will not run if counter 3 state gets updated
    return () => {
      console.log("clean function 1");
    };
  }, [counterObj]);

  useEffect(() => {
    console.log("Something wrong 2!");
    //this cleanup function runs just before component rerenders due to dependent array state update or component unmounts
    return () => {
      console.log("clean function 2");
    };
  }, [counter3]);

  useEffect(() => {
    console.log("Something wrong 3!");

    // this cleanup function only when component unmounts
    return () => {
      console.log("clean function 3");
    };
  }, []);

  return (
    <div>
      <button
        onClick={() =>
          setCounterObj((prevState) => {
            return { ...prevState, counter1: prevState.counter1 + 1 };
          })
        }
      >
        Increase counter 1
      </button>
      <button
        onClick={() =>
          setCounterObj((prevState) => {
            return { ...prevState, counter2: prevState.counter2 + 1 };
          })
        }
      >
        Increase counter 2
      </button>
      <button onClick={() => setCounter3((prev) => prev + 1)}>
        Increase counter 3
      </button>
      <p>
        {`counter 1: ${counterObj.counter1} `}
        {`counter 2: ${counterObj.counter2} `}
        {`counter 3: ${counter3}`}
      </p>
    </div>
  );
};

export default UseEffectComponent;
