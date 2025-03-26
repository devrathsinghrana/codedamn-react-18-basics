import "./App.css";
import { useState } from "react";
import ToDo from "./apps/ToDo";
import Counter from "./apps/Counter";
import RandomQuotes from "./apps/RandomQuotes";
import FaqAccordion from "./apps/FaqAccordion";
import Quiz from "./apps/Quiz";
import BirthdayReminder from "./apps/BirthdayReminder";
import { Route, BrowserRouter, Routes, Link } from "react-router";
import Tiktok from "./apps/Tiktok";
import Tour from "./apps/Tour";
import Menus from "./apps/Menus";
import LazyInitializer from "./apps/LazyInitializer";
import CounterAppFunctionalStateUpdateWithSetTimeout from "./apps/CounterAppFunctionalStateUpdateWithSetTimeout";
import CreateSetStateLikeClassBasedComponent from "./apps/CreateSetStateLikeClassBasedComponent";
import UseEffectComponent from "./apps/UseEffectComponent";

const APP_NAME = {
  TODO: "todo-app",
  COUNTER: "counter-app",
  RANDOMIZE_QUOTES: "randomize-quotes-app",
  FAQ_ACCORDION: "faq-accordion-app",
  QUIZ: "quiz-app",
  BIRTHDAY_REMINDER: "birthday-reminder-app",
};

function App() {
  const [currentApp, setCurrentApp] = useState(APP_NAME["TODO"]);

  const setAppOnClick = (appTypePassed) => {
    setCurrentApp(appTypePassed);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <button onClick={() => setAppOnClick(APP_NAME["TODO"])}>
                  To Do App
                </button>
                <button onClick={() => setAppOnClick(APP_NAME["COUNTER"])}>
                  Counter App
                </button>
                <button
                  onClick={() => setAppOnClick(APP_NAME["RANDOMIZE_QUOTES"])}
                >
                  Random Quote App
                </button>
                <button
                  onClick={() => setAppOnClick(APP_NAME["FAQ_ACCORDION"])}
                >
                  FAQ App
                </button>
                <button onClick={() => setAppOnClick(APP_NAME["QUIZ"])}>
                  QUIZ App
                </button>{" "}
                <button
                  onClick={() => setAppOnClick(APP_NAME["BIRTHDAY_REMINDER"])}
                >
                  Birthday Reminder App
                </button>
                <Link to="/tik-tok">Tiktok app</Link>
                <br />
                <Link to="/tour">Tours app</Link>
                <br />
                <Link to="/restro">Restro app</Link>
                <br />
                <Link to="/counter-app">
                  Counter app with functional setState and setTimeout
                </Link>
                <br />
                <Link to="/classComponentLikeSetState">
                  classComponentLikeSetState
                </Link>
                <br />
                <Link to="/useEffectComponent">useEffectComponent</Link>
                <br />
                <main>
                  {(() => {
                    switch (currentApp) {
                      case APP_NAME["TODO"]:
                        return <ToDo />;
                      case APP_NAME["COUNTER"]:
                        return <Counter />;
                      case APP_NAME["RANDOMIZE_QUOTES"]:
                        return <RandomQuotes />;
                      case APP_NAME["FAQ_ACCORDION"]:
                        return <FaqAccordion />;
                      case APP_NAME["QUIZ"]:
                        return <Quiz />;
                      case APP_NAME["BIRTHDAY_REMINDER"]:
                        return <BirthdayReminder />;
                      default:
                        return <ToDo />;
                    }
                  })()}
                </main>
              </>
            }
          />
          <Route path="/tik-tok" element={<Tiktok />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/restro" element={<Menus />} />
          <Route path="/lazy-initializer" element={<LazyInitializer />} />
          <Route
            path="/counter-app"
            element={<CounterAppFunctionalStateUpdateWithSetTimeout />}
          />
          <Route
            path="/classComponentLikeSetState"
            element={<CreateSetStateLikeClassBasedComponent />}
          />
          <Route path="/useEffectComponent" element={<UseEffectComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
