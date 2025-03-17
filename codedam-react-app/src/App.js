import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ToDo from "./apps/ToDo";
import Counter from "./apps/Counter";
import RandomQuotes from "./apps/RandomQuotes";

const APP_NAME = {
  TODO: "todo-app",
  COUNTER: "counter-app",
  RANDOMIZE_QUOTES: "randomize-quotes-app",
};

function App() {
  const [currentApp, setCurrentApp] = useState(APP_NAME["TODO"]);

  const setAppOnClick = (appTypePassed) => {
    setCurrentApp(appTypePassed);
  };

  return (
    <div className="App">
      <button onClick={() => setAppOnClick(APP_NAME["TODO"])}>To Do App</button>
      <button onClick={() => setAppOnClick(APP_NAME["COUNTER"])}>
        Counter App
      </button>
      <button onClick={() => setAppOnClick(APP_NAME["RANDOMIZE_QUOTES"])}>
        Random Quote App
      </button>
      <main>
        {(() => {
          switch (currentApp) {
            case APP_NAME["TODO"]:
              return <ToDo />;
            case APP_NAME["COUNTER"]:
              return <Counter />;
            case APP_NAME["RANDOMIZE_QUOTES"]:
              return <RandomQuotes />;
          }
        })()}
      </main>
    </div>
  );
}

export default App;
