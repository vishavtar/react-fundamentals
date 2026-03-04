import { NavLink } from "react-router";
function LeftNav() {
  const navItems = [
    "Importing and exporting components",
    "Click event and function call",
    "What is State in React",
    "Toggle HTML element | Hide and show",
    "Conditional Rendering",
    "Props",
    "Props Advanced",
  ];
  return (
    <>
      {/* { // <ul className="leftNaveStyle">
    //   {navItems.map((items, index) => {
    //     return <li key={index}>{items};
    //   })}
    // </ul>} */}
      <nav className="leftNaveStyle">
        <NavLink to="react-fundamentals/" end>
          UseStates
        </NavLink>
        <NavLink to="react-fundamentals/props">Props & Object </NavLink>
        <NavLink to="react-fundamentals/hideShow">Hide and show </NavLink>
        <NavLink to="react-fundamentals/children">Children </NavLink>
        <NavLink to="react-fundamentals/input">Input </NavLink>
        <NavLink to="react-fundamentals/checkbox"> Checkbox</NavLink>
        <NavLink to="react-fundamentals/radio">Radio </NavLink>{" "}
        <NavLink to="react-fundamentals/select"> Select</NavLink>
        <NavLink to="react-fundamentals/map">Map </NavLink>
        <NavLink to="react-fundamentals/clock"> Clock</NavLink>
        <NavLink to="react-fundamentals/loop"> Loop</NavLink>
        <NavLink to="react-fundamentals/customDropDown">
          {" "}
          Custom Dropdown
        </NavLink>
        <NavLink to="react-fundamentals/styles"> Styles</NavLink>
        <NavLink to="react-fundamentals/passFunctions"> Pass Functions</NavLink>
        <NavLink to="react-fundamentals/moduleStyle">
          Module And Component Style
        </NavLink>
        <NavLink to="react-fundamentals/forwardRef">Forward Ref</NavLink>
        <NavLink to="react-fundamentals/updateObjects">
          {" "}
          Updating Objects
        </NavLink>
        <NavLink to="react-fundamentals/updateArray"> Updating Array</NavLink>
        <NavLink to="react-fundamentals/useActionState">
          {" "}
          Use Action State
        </NavLink>
        <NavLink to="react-fundamentals/customHookToggle">
          Custom Hook - Toggle
        </NavLink>
        <NavLink to="react-fundamentals/contextAPI"> Context API</NavLink>
        <NavLink to="react-fundamentals/user">
          json Server (add and remove user List API )
        </NavLink>
      </nav>
    </>
  );
}
export default LeftNav;
