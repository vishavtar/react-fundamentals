import Test from "../Componant/test";
import TestObject from "../Componant/testObject";
import Collage from "../Componant/Collage";
import Studant from "../Componant/Studant";
import DefaltProps from "../Componant/DefaltProps";
import DinamicStyleProps from "../Componant/DinamicStyleProps";
import GetInputFildVal from "../Componant/GetInputFildVal";
import CheckBoxes from "../Componant/CheckBox";
import Radio from "../Componant/Radio";
import SelectOption from "../Componant/SelectOption";
import Map from "../Componant/Map";
import ShowClockWithSelectOpt from "../Componant/CLockComponants/ShowClockWithSelectOpt";
import NestedLoop from "../Componant/NestedLoop/NestedLoop";
import CustomDropDown from "../Componant/CustomDropDown/CustomDropDown";
import MultiSelectDropDown from "../Componant/CustomDropDown/MultiSelectDropDown";
import BasicUseEffect from "../Componant/UseEffect/BasicUseEffect";
import UseStates from "../Componant/UseStates";
import StylesCom from "../Componant/StylesCom";

function RightCon() {
  const user1 = {
    user: "test",
    age: "2",
    address: "India",
  };
  let collageArray = ["sinnar", "us"];
  return (
    <div className="innerCon">
      <StylesCom />
      <hr />
      <BasicUseEffect />
      <br />
      <MultiSelectDropDown />
      <hr />
      <CustomDropDown />
      <hr />
      <p>Nested Loops</p>
      <NestedLoop />
      <hr />
      <ShowClockWithSelectOpt />
      <hr />
      <h3>Map use for loop user info from array of object</h3>
      <Map />
      <hr />
      <SelectOption />
      <hr />
      <Radio />
      <hr />
      <p>Check Skills List</p>
      <CheckBoxes />
      <hr />
      <div>Get value from Input and Clear </div>
      <GetInputFildVal />
      <hr />
      <DinamicStyleProps>Default</DinamicStyleProps>
      <DinamicStyleProps textColor="blue" brColor="yellow">
        ssas
        <h3 style={{ color: "red" }}>Tejal</h3>
      </DinamicStyleProps>
      <hr />
      <DefaltProps />
      <hr />
      <Collage name={collageArray[0]} />
      <Test name={"Vishnu"} age={29} address={"mumbai"} />
      <TestObject user={user1} />
      <hr />
      <UseStates />
    </div>
  );
}

export default RightCon;
