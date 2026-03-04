import { useState, useRef } from "react";

function UpdatingObjects() {
  const nameValue = useRef();
  const cityValue = useRef();
  const pinCodeValue = useRef();
  const [massage, setMassage] = useState("Please Add Information and Submit ");
  const [getData, setData] = useState({
    name: "vishnu",
    address: {
      city: "Sinner",
      pinCode: "422103",
    },
  });

  const saveData = () => {
    const name = nameValue.current.value;
    const city = cityValue.current.value;
    const pinCode = pinCodeValue.current.value;

    if (name && city && pinCode) {
      getData.name = nameValue.current.value;
      getData.address.city = cityValue.current.value;
      getData.address.pinCode = pinCodeValue.current.value;
      console.log(pinCodeValue.current.value);
      setData({ ...getData });
      setMassage("Your Information Saved");
    } else {
      setMassage("Please Enter Information");
    }
  };
  return (
    <>
      <h3>Updating Objects In State</h3>
      <input type="text" ref={nameValue} placeholder="Enter name" />
      <br />
      <input type="text" ref={cityValue} placeholder="Enter City" />
      <br />
      <input type="number" ref={pinCodeValue} placeholder="Enter pin-code" />
      <br />
      <button type="button" onClick={saveData}>
        Submit
      </button>
      <br />
      <p>{massage}</p>
      <br />
      <h4>Object Data Html</h4>
      <ul>
        <li>{getData.name}</li>
        <li>{getData.address.city}</li>
        <li>{getData.address.pinCode}</li>
      </ul>
    </>
  );
}
export default UpdatingObjects;
