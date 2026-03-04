import LoginFrom from "./LoginFrom";

function PassFunctions({ parFun, text }) {
  function parFun(name) {
    alert(name);
  }
  return (
    <>
      <div>Pass function Component </div>
      <LoginFrom parFun={parFun} name="massage" text={"text"} />
    </>
  );
}
export default PassFunctions;
