import { useState } from "react";

export default function AddUser() {
  const [name, setname] = useState();
  const [age, serAge] = useState();
  const [address, setAddress] = useState();
  const [massage, setMessge] = useState();

  const addNewUSer = async () => {
    if (name && age && address) {
      let userDetails = {
        name,
        age,
        address,
      };
      const url = "http://localhost:3000/users";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(userDetails),
      });
      const result = await response.json();
      console.log(response);
      setMessge("User Added Successfully");
    } else {
      console.log("dad");

      setMessge("Please enter User Details");
    }
  };

  return (
    <>
      <input
        type="text"
        onChange={(even) => setname(event.target.value)}
        placeholder="Add User name"
      />
      <br />
      <input
        type="number"
        onChange={(even) => serAge(event.target.value)}
        placeholder="Add User Age"
      />
      <br />
      <input
        type="text"
        onChange={(even) => setAddress(event.target.value)}
        placeholder="Add User Address"
      />
      <br />
      <button onClick={addNewUSer}>Add New User</button>
      <p>{massage && massage}</p>
      <br />
      <hr />
    </>
  );
}
