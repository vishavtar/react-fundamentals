import { useState } from "react";
import User from "./User";
import Users from "./users";

function LifitingUp() {
  const [getUser, setUser] = useState([]);
  console.log("dsds", getUser);
  return (
    <>
      <User userData={setUser} get={getUser} />
      <Users users={getUser} />
    </>
  );
}
export default LifitingUp;
