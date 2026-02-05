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
    <ul className="leftNaveStyle">
      {navItems.map((items, index) => {
        return <li key={index}>{items}</li>;
      })}
    </ul>
  );
}
export default LeftNav;
