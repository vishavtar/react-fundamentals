import { useEffect, useState } from "react";
import ReduceCount from "./ReduceCount";

function BasicUseEffect() {
  const [count, setCount] = useState(0);
  const [reduceCount, setreduceCount] = useState(100);
  function countCheck() {
    console.log("UseEffect Check and use");
  }

  useEffect(() => {
    countCheck();
  }, [count, reduceCount]);
  return (
    <>
      <h3>Besic Counter </h3>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <ReduceCount reduceCount={reduceCount} setreduceCount={setreduceCount} />
      <br />
      <br />
    </>
  );
}
export default BasicUseEffect;
