import React from "react";
import "./App.css";

import { TimeProvider } from "./components/time-context";
import WindowSize from "./components/window-size";
import Clock from "./components/clock";

function App() {
  return (
    <TimeProvider>
      <div className="app">
        <WindowSize />
        <Clock />
      </div>
    </TimeProvider>
  );
}

export default App;
