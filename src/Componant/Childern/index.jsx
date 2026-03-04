import DinamicStyleProps from "./DinamicStyleProps";

export default function Childern() {
  return (
    <>
      <DinamicStyleProps>Default</DinamicStyleProps>
      <DinamicStyleProps textColor="blue" brColor="yellow">
        ssas
        <h3 style={{ color: "red" }}>Tejal</h3>
      </DinamicStyleProps>
    </>
  );
}
