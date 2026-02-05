import { useState } from "react";

function CheckBoxes() {
  const [value, setValue] = useState([]);
  function saveValue(event) {
    if (event.target.checked) {
      setValue([...value, event.target.value]);
    } else {
      setValue(value.filter((items) => items != event.target.value));
    }
  }
  return (
    <div>
      <input
        type="checkbox"
        onChange={(event) => saveValue(event)}
        value="HTML 5"
        id="html"
      />
      <label htmlFor="html">HTML 5</label>
      <br />
      <br />
      <input
        type="checkbox"
        onChange={(event) => saveValue(event)}
        value="CSS 3"
        id="css3"
      />
      <label htmlFor="css3">CSS 3</label>
      <br />
      <br />
      <input
        type="checkbox"
        onChange={(event) => saveValue(event)}
        value="Javascript"
        id="javascript"
      />
      <label htmlFor="javascript">Javascript</label>
      <br />
      <br />
      <input
        type="checkbox"
        onChange={(event) => saveValue(event)}
        value="React js"
        id="reactJs"
      />
      <label htmlFor="reactJs">React js</label>
      <br />
      <br />
      <p>Valuses:{value}</p>
    </div>
  );
}
export default CheckBoxes;
