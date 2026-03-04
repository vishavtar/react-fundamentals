import { useContext } from "react";
import { CreateCon } from "./CreateCon";

export default function ResultCon() {
  const result = useContext(CreateCon);
  return (
    <div style={{ background: "yellow" }}>
      <p>resultes: {result}</p>
    </div>
  );
}
