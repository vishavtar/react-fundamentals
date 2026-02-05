import { useEffect, useState, useRef } from "react";
import "./Style.css";
function MultiSelectDropDown() {
  const [selection, setSelection] = useState(false);
  const [selectedList, setselectedList] = useState([]);
  const listClickItem = (event) => {
    const eventItems = event.target.closest("li");

    if (!selectedList.includes(eventItems.innerText)) {
      setselectedList([...selectedList, eventItems.innerText]);
      eventItems.classList.add("active");
    } else {
      setselectedList(
        selectedList.filter((item) => item !== eventItems.innerText),
      );
      eventItems.classList.remove("active");
    }
  };
  function baches(event) {
    console.log(event.target.innerText);
    setselectedList(
      selectedList.filter((item) => item !== event.target.innerText),
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <div className="DropDownCon">
        <div
          className="DropDownSelect"
          onClick={() => setSelection(!selection)}
        >
          Select Multiple Options
        </div>

        <ul className="DropDownList" onClick={(event) => listClickItem(event)}>
          {selection ? (
            <>
              <li value={"Jeans"}>Jeans</li>
              <li value={"t_shirts"}>T-shirts</li>
              <li value={"formal_shirts"}>Formal Shirts</li>
              <li value={"formal_pant"}>Formal Pant</li>
              <li value={"casual_shirts"}>Casual Shirts</li>
              <li value={"casual_pants"}>Casual Pants</li>
              <li value={"trouser"}>Trouser</li>
            </>
          ) : null}
        </ul>
      </div>
      <div>
        {selectedList.length > 0
          ? selectedList.map((items, index) => (
              <button
                className="batches"
                onClick={(event) => baches(event)}
                key={index}
              >
                {items}
              </button>
            ))
          : null}
      </div>
    </div>
  );
}
export default MultiSelectDropDown;
