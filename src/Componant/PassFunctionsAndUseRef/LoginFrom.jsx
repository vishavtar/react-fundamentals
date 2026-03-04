import { useRef } from "react";

function LoginFrom({ parFun, text }) {
  const userName = useRef();
  function inputex(event) {
    event.preventDefault();
    userName.current.value = "dsds";
    userName.current.placeholder = "vishnu";
  }
  return (
    <div>
      <form>
        <input type="text" ref={userName} placeholder="Enter your User Name" />
        <button onClick={() => inputex(event)}>Submit</button>
        <br />
        <br />
        <button onClick={(event) => parFun(event)}>{text}</button>
      </form>
    </div>
  );
}
export default LoginFrom;
