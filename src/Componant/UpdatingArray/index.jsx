import { useState, useRef } from "react";

function UpdatingArray() {
  const [getData, setData] = useState(["vishnu", "Rajveer", "tejal"]);
  const [getDataObj, setDataObj] = useState([
    {
      name: "anil",
      age: 99,
      address: "mumbai",
    },
    {
      name: "vish",
      age: 35,
      address: "nashik",
    },
  ]);
  function changeCont(event) {
    // console.log(getData[getData.length - 1]);
    getData[getData.length - 1] = event;
    setData([...getData]);
  }
  function changeAge(event) {
    console.log(getDataObj[getDataObj.length - 1].age);
    getDataObj[1].age = event;
    setDataObj([...getDataObj]);
  }
  return (
    <div>
      <input
        type="text"
        onChange={(event) => changeCont(event.target.value)}
        placeholder="Enter Text"
      />
      <br />
      <br />
      <b>Array Content:</b>
      {getData.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
      <br />
      <br />
      <h4> Object's In Array</h4>
      <input
        type="number"
        onChange={(event) => changeAge(event.target.value)}
        placeholder="Change Vish Age text"
      />
      {getDataObj.map((item, i) => (
        <p key={i}>
          <b>name:</b> {item.name}, <b>Age</b>: {item.age}, <b>Address:</b>{" "}
          {item.address}
        </p>
      ))}
    </div>
  );
}
export default UpdatingArray;
