import DinamicStyleProps from "../Componant/Childern/DinamicStyleProps";
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
import ModuleAndComponantStyle from "../Componant/StylesCom/ModuleAndComponantStyle";
import { PassFunctions } from "../Componant/PassFunctionsAndUseRef";
import ForwardRef from "../Componant/ForwordRef/ForwardRef";
import LifitingUp from "../Componant/LifitingUp";
import UpdatingObjects from "../Componant/UpdatingObjects";
import UpdatingArray from "../Componant/UpdatingArray";
import UseActionState from "../Componant/UseActionState";
import Toggle from "../Componant/useToggleHook";
import ContextAPI from "../Componant/ContextAPI";
import { Route, Routes } from "react-router";
import Props from "../Componant/Props";
import Children from "../Componant/Childern";
import User from "./json";
import AddUser from "./json/AddUser";
import EditUser from "./json/EditUser";

function RightCon() {
  return (
    <div className="innerCon">
      <Routes>
        <Route path="react-fundamentals/" element={<UseStates />} />
        <Route path="react-fundamentals/props" element={<Props />} />
        <Route path="react-fundamentals/hideShow" element={<></>} />
        <Route path="react-fundamentals/children" element={<Children />} />
        <Route path="react-fundamentals/input" element={<GetInputFildVal />} />
        <Route path="react-fundamentals/checkbox" element={<CheckBoxes />} />
        <Route path="react-fundamentals/radio" element={<Radio />} />
        <Route path="react-fundamentals/select" element={<SelectOption />} />
        <Route path="react-fundamentals/map" element={<Map />} />
        <Route
          path="react-fundamentals/clock"
          element={<ShowClockWithSelectOpt />}
        />
        <Route path="react-fundamentals/loop" element={<NestedLoop />} />
        <Route
          path="react-fundamentals/customDropDown"
          element={
            <>
              <CustomDropDown />
              <MultiSelectDropDown />
            </>
          }
        />
        <Route
          path="react-fundamentals/useEffect"
          element={<BasicUseEffect />}
        />
        <Route path="react-fundamentals/styles" element={<StylesCom />} />
        <Route
          path="react-fundamentals/passFunctions"
          element={<PassFunctions />}
        />
        <Route
          path="react-fundamentals/moduleStyle"
          element={<ModuleAndComponantStyle />}
        />
        <Route path="react-fundamentals/forwardRef" element={<ForwardRef />} />
        <Route
          path="react-fundamentals/updateObjects"
          element={<UpdatingObjects />}
        />
        <Route
          path="react-fundamentals/updateArray"
          element={<UpdatingArray />}
        />
        <Route
          path="react-fundamentals/useActionState"
          element={<UseActionState />}
        />
        <Route
          path="react-fundamentals/customHookToggle"
          element={<Toggle />}
        />
        <Route path="react-fundamentals/contextAPI" element={<ContextAPI />} />

        <Route path="react-fundamentals/user" element={<User />}>
          <Route
            path="/react-fundamentals/user/addNewUser"
            element={<AddUser />}
          />
          <Route
            path="/react-fundamentals/user/editUser/:id"
            element={<EditUser />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default RightCon;
