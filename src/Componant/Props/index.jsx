import Collage from "./Collage";
import Studant from "./Studant";
import Test from "./test";
import TestObject from "./testObject";
import DefaltProps from "./DefaltProps";

export default function Props() {
  let collageArray = ["sinnar", "us"];
  const user1 = {
    user: "test",
    age: "2",
    address: "India",
  };
  return (
    <>
      <DefaltProps />
      <Collage name={collageArray[0]} />
      <Studant />
      <Test name={"Vishnu"} age={29} address={"mumbai"} />
      <TestObject user={user1} />
    </>
  );
}
