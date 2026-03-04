import { useFormStatus } from "react-dom";

function UseFormStatusfun() {
  const { pending } = useFormStatus();
  return (
    <>
      <h4>Use Form Status Hook</h4>
      <input type="text" />
      <button type="submit" disabled={pending}>
        {pending == true ? "Submiting From ..." : "Submit"}
      </button>
    </>
  );
}
export default UseFormStatusfun;
