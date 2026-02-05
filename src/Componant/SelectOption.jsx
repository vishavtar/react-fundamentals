import { useState } from "react";

function SelectOption() {
  const [city, setCity] = useState("pune");
  return (
    <div>
      <p>Select City </p>
      <select
        name=""
        id=""
        defaultValue={city}
        onChange={(event) => setCity(event.target.value)}
      >
        <option value="mumbai">Mumbai</option>
        <option value="nashik">Nashik</option>
        <option value="pune">Pune</option>
        <option value="satara">Satara</option>
      </select>
      <p>Selected City: {city}</p>
    </div>
  );
}
export default SelectOption;
