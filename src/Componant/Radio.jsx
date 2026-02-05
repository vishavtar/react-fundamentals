import { useState } from "react";

function Radio() {
  const [gender, setGender] = useState("female");
  return (
    <div>
      <h4>Select Gender</h4>
      <input
        type="radio"
        checked={gender == "male"}
        value={"male"}
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="male"
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        checked={gender == "female"}
        value={"female"}
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="female"
      />
      <label htmlFor="female">Female</label>
      <p>Output: {gender}</p>
    </div>
  );
}
export default Radio;
