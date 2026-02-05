import { useState } from "react";
import Clock from "./Clock";

const ShowClockWithSelectOpt = () => {
  const [clockColor, setClockColor] = useState();
  function setClockColorSet(event) {
    if (event.target.value == "red") {
      setClockColor({ color: "white", bgColor: "red" });
    } else if (event.target.value == "yellow") {
      setClockColor({ color: "black", bgColor: "yellow" });
    } else if (event.target.value == "blue") {
      setClockColor({ color: "white", bgColor: "blue" });
    } else if (event.target.value == "green") {
      setClockColor({ color: "white", bgColor: "green" });
    } else {
      setClockColor({ color: "white", bgColor: "black" });
    }
  }
  return (
    <>
      <h4>Clock color change according to selected color from dropDown</h4>
      <select onChange={(event) => setClockColorSet(event)}>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <Clock colors={clockColor} />
    </>
  );
};
export default ShowClockWithSelectOpt;
