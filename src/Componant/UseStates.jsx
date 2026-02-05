import { useState } from "react";
import Studant from "./Studant";

function UseStates() {
  const [studant, setStudant] = useState("Rajveer 01");

  function studantName() {
    setStudant("Rajverr");
  }
  return (
    <>
      <button onClick={studantName} className="btn">
        Add Studant Name
      </button>

      {studant && <Studant user={studant} />}
    </>
  );
}

export default UseStates;
