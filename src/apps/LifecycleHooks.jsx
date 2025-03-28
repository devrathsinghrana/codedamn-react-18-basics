import React, { useEffect, useState } from "react";

function Child() {
  console.log("\t\t> Child rendered");//6th render - 5, 7th render - 3

  useEffect(() => {
    console.log("\t\t> Child updated");//...6th render - 7, 7th render - 7
    return () => {
      console.log("\t\t> Child cleanup called");// 7th render - 5
    };
  });

  console.log("\t\t> Child rendering complete");//...6th render - 6, 7th render - 4
  return <h1>I am a Child</h1>;
}
const LifecycleHooks = () => {
  console.log("> LifecycleHooks render started");//1st render - 1, 2nd render - 1...6th render - 1, 7th render - 1
  const [counter, setCounter] = useState(() => {
    console.log("> Lazy init 1 called");//1st render - 2
    return 0;
  });
  const [show, setShow] = useState(() => {
    console.log("> Lazy init 2 called");//1st render - 3
    return false;
  });

  useEffect(() => {
    console.log("> Counter updated | value = ", counter);//1st render - 5, 2nd render - 4...6th render - 4, 7th render - 8
    if (counter === 5) setShow(true);
    else setShow(false);
    return () => {
      console.log("> Cleaning up effect of counter | value = ", counter);//2nd render - 3...6th render - 3, 7th render - 6
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

  console.log("> LifecycleHooks render completed");//1st render - 4, 2nd render - 2...6th render - 2, 7th render - 1

  return <>{AppComponent}</>;
};

export default LifecycleHooks;
