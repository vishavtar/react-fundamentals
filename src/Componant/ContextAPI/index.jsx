import { useState } from "react";
import ContextCon from "./contextCon";
import { CreateCon } from "./CreateCon";

function ContextAPI() {
  const [data, cahngeData] = useState();
  return (
    <div style={{ background: "#e9e9e9", padding: "10px" }}>
      <h2>Create Context API </h2>
      <select value={data} onChange={(event) => cahngeData(event.target.value)}>
        <option value="">Select Options</option>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
      </select>
      <br />
      <CreateCon.Provider value={data}>
        <ContextCon />
      </CreateCon.Provider>
      <br />

      <button onClick={() => cahngeData(" ")}>Clear Value</button>
    </div>
  );
}
export default ContextAPI;
