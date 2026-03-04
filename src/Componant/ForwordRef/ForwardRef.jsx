import { startTransition, useRef, useTransition } from "react";
import ForwordForm from "./ForwordForm";
import ForwordFormNew from "./ForwordFormNew";
import UseFormStatusfun from "./UseFormStatusfun";

function ForwardRef() {
  const inputRef = useRef();
  const inputRefNew = useRef();
  const [trasmistion, settrasmistion] = useTransition();
  function changeInputStyle() {
    inputRef.current.style.color = "red";
    inputRef.current.style.borderColor = "green";
    inputRef.current.style.background = "yellow";
  }
  function changeInputStyleNew() {
    inputRefNew.current.style.color = "red";
    inputRefNew.current.style.borderColor = "green";
    inputRefNew.current.style.background = "yellow";
  }
  const formStatusAction = async () => {
    await new Promise((res) => setTimeout(res, 2000));
  };

  const useTrans = () => {
    settrasmistion(async () => {
      await new Promise((set) => setTimeout(set, 2000));
    });
  };
  return (
    <>
      <h3>ForwardRef Method Before and After 19 Ver </h3>
      <div>
        <ForwordForm ref={inputRef} />
        <button onClick={changeInputStyle}>Button</button>
        <br />
        <br />
        <ForwordFormNew ref={inputRefNew} />
        <button onClick={changeInputStyleNew}>Button</button>
        <br />
        <br />
        <form action={formStatusAction}>
          <UseFormStatusfun />
        </form>
        <h3>Loader for fetch data </h3>
        {trasmistion ? "loading...  " : "Load Data "}
        <br /> <br />
        <button type="button" onClick={useTrans} disabled={trasmistion}>
          Button
        </button>
      </div>
    </>
  );
}
export default ForwardRef;
