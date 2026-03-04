import { useState } from "react";

const useToggle = (defValue) => {
  // console.log(defValue);
  const [refValue, setRefValue] = useState(defValue);

  function toggleFun(value) {
    if (typeof value !== "boolean") {
      setRefValue(!refValue);
    } else {
      setRefValue(value);
    }
  }

  return [refValue, toggleFun];
};
export default useToggle;
