import { useRef, useState } from "react";

function User({ userData, get }) {
  const getrefData = useRef();
  const [enterText, setenterText] = useState();

  function getData() {
    const dataLenght = getrefData.current.value;
    console.log(get);

    if (dataLenght.length > 0) {
      userData([...get, getrefData.current.value]);
      setenterText();
    } else {
      setenterText("please Enter Text");
    }
  }

  return (
    <div>
      <h4>Get User Info</h4>
      <input
        type="text"
        ref={getrefData}
        placeholder="Please Enter text"
      />{" "}
      <p style={{ color: "red" }}>{enterText}</p>
      <button onClick={getData}>Submit</button>
    </div>
  );
}
export default User;
