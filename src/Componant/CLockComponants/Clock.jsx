import { useEffect, useState } from "react";

function Clock({ colors }) {
  const [times, setclock] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setclock(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <p
        style={{
          color: colors ? colors.color : "white",
          backgroundColor: colors ? colors.bgColor : "black",
          borderRadius: "10px",
          padding: "5px",
          width: "100px",
        }}
      >
        {times}
      </p>
    </>
  );
}
export default Clock;
