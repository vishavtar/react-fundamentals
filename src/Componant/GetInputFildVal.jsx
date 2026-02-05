import { useState } from "react";

function GetInputFildVal() {
  const [value, setValue] = useState("");
  const [valuethree01, setinputthree01] = useState("");
  const [valuethree02, setinputthree02] = useState("");
  const [valuethree03, setinputthree03] = useState("");
  function values() {
    setinputthree01("");
    setinputthree02("");
    setinputthree03("");
  }
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="please enter text"
      />
      <h3>{value}</h3>
      <button onClick={() => setValue("")}> Clear Value</button>
      <h4>Task Three Input filed data need to be add in console </h4>

      <input
        type="text"
        value={valuethree01}
        onChange={(event) => setinputthree01(event.target.value)}
        placeholder="Input 01"
      />
      <input
        type="text"
        value={valuethree02}
        onChange={(event) => setinputthree02(event.target.value)}
        placeholder="Input 02"
      />
      <input
        type="text"
        value={valuethree03}
        onChange={(event) => setinputthree03(event.target.value)}
        placeholder="Input 03"
      />
      <br />
      <br />
      <button onClick={values}>Clear Values</button>
      <br />
      <br />
      <p>Clear with inside button operation</p>
      <button
        onClick={() => (
          setinputthree03(""),
          setinputthree02(""),
          setinputthree01("")
        )}
      >
        Clear
      </button>
    </div>
  );
}
export default GetInputFildVal;
