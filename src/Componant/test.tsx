type Props = {
  name: "String";
  age: "String";
  address: "string";
};
function Test({ name, age, address }: Props) {
  return (
    <>
      <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h3>{address}</h3>
      </div>
    </>
  );
}
export default Test;
