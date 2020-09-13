import React from "react";
import Routes from "./routes";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <TopBar />
      <Routes />
    </div>
  );
}

export default App;
