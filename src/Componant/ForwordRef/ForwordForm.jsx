import { forwardRef } from "react";

function ForwordForm(props, ref) {
  return (
    <>
      <input type="text" ref={ref} />
      <p>
        Focused and Change style after click below Button{" "}
        <b>Before 19 Method</b>
      </p>
    </>
  );
}
export default forwardRef(ForwordForm);
