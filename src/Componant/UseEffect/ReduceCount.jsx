import { useEffect, useState } from "react";

function ReduceCount({ reduceCount, setreduceCount }) {
  return (
    <>
      <h3>Reduce Counter </h3>
      <button onClick={() => setreduceCount(reduceCount - 1)}>
        reduceCount {reduceCount}
      </button>
      <br />
      <br />
    </>
  );
}
export default ReduceCount;
