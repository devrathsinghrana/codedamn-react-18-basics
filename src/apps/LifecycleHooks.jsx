import React, { useEffect, useState } from "react";

function Child() {
  console.log("\t\t> Child rendered");

  useEffect(() => {
    console.log("\t\t> Child updated");
    return () => {
      console.log("\t\t> Child cleanup called");
    };
  });

  console.log("\t\t> Child rendering complete");
  return <h1>I am a Child</h1>;
}
const LifecycleHooks = () => {
  console.log("> LifecycleHooks render started");
  const [counter, setCounter] = useState(() => {
    console.log("> Lazy init 1 called");
    return 0;
  });
  const [show, setShow] = useState(() => {
    console.log("> Lazy init 2 called");
    return false;
  });

  useEffect(() => {
    console.log("> Counter updated | value = ", counter);
    if (counter === 5) setShow(true);
    else setShow(false);
    return () => {
      console.log("> Cleaning up effect of counter | value = ", counter);
    };
  }, [counter]);

  const AppComponent = (
    <div>
      <h1 onClick={() => setCounter((counter) => counter + 1)}>
        Counter 1: {counter}
      </h1>
      <br />
      {show && <Child />}
      {/**this line will not have any computational effect due to multiple rerenders of its parent or containing component because react will not create this component until and unless it will actually be mounted on the screen even id it is defined here because we are applying show state logic to it. even if we define some component inside this parent component but not actually render it any ehere react eill not create that component and not consume extra computations. */}
    </div>
  );

  console.log("> LifecycleHooks render completed");

  return <>{AppComponent}</>;
};

export default LifecycleHooks;
