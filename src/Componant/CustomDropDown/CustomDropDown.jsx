import { Children, useState } from "react";
import "./Style.css";
function CustomDropDown() {
  const [list, setList] = useState(false);
  const [optSel, setoptSel] = useState("Select Single Country");
  function options(event) {
    setoptSel(event.target.getAttribute("value"));
  }
  document.addEventListener("click", () => {
    setList(false);
  });
  return (
    <>
      <h3>Custom Dropdown Ith single Select option</h3>
      <div className="DropDownCon">
        <div
          className="DropDownSelect"
          onClick={(event) => setList(!list, event.stopPropagation())}
        >
          {optSel ? optSel : "Select Single Country"}
        </div>
        {list ? (
          <ul
            className="DropDownList"
            id="droplist"
            onClick={(event) => options(event)}
          >
            <li value={"india"}>India</li>
            <li value={"us"}>US</li>
            <li value={"uk"}>UK</li>
            <li value={"dubai"}>Dubai</li>
            <li value={"paris"}>Paris</li>
          </ul>
        ) : null}
      </div>
    </>
  );
}
export default CustomDropDown;
