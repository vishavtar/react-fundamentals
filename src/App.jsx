import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LeftNav from "./MainComponent/LeftNav";
import RightCon from "./MainComponent/RightCon";

function App() {
  return (
    <>
      <LeftNav />
      <RightCon />
    </>
  );
}

export default App;
