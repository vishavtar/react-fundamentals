import useToggle from "./useToggle";

function Toggle() {
  const [toggle, settToggle] = useToggle(true);

  return (
    <div>
      <button onClick={settToggle}> Toggle Text</button>
      <button onClick={() => settToggle(false)}> Hide</button>
      <button onClick={() => settToggle(true)}> Show</button>
      {toggle ? <h1>Vishnu</h1> : null}
    </div>
  );
}
export default Toggle;
