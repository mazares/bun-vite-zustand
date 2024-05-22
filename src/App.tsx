import "./App.css";

import { useCounterStore } from "./store";

import { useThemeStore } from "./themeStore";

function App() {
  const count = useCounterStore((state) => state.count);

  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={`app ${theme}`}>
      <button
        className="theme__button"
        onClick={() => useThemeStore.getState().toggleTheme()}
      >
        {theme === "dark" ? "☼" : "☾"}
      </button>

      <h1>React App</h1>
      <p>React App with TypeScript & Zustand</p>

      <h2>Counter</h2>

      <div className="counter__actions">
        <button onClick={() => useCounterStore.getState().decrementAsync()}>
          -10
        </button>

        <button onClick={() => useCounterStore.getState().decrement()}>
          -1
        </button>
        <h1>{count}</h1>

        <button onClick={() => useCounterStore.getState().increment()}>
          +1
        </button>

        <button onClick={() => useCounterStore.getState().incrementAsync()}>
          +10
        </button>
      </div>

      <article>
        <p>
          This is a simple React app that uses TypeScript and Zustand for state
          management.
        </p>
        <p>
          The app has a counter that can be incremented and decremented by 1 or
          10.
        </p>
        <p>
          The app also has a theme that can be toggled between dark and light.
        </p>
        <p>
          incrementAsync and decrementAsync functions are used to simulate an
          API call.
        </p>
      </article>
    </div>
  );
}

export default App;
