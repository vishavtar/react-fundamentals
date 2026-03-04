function DinamicStyleProps({ children, textColor = "red", brColor = "green" }) {
  return (
    <>
      <div
        style={{
          color: textColor,
          borderStyle: "solid",
          borderSize: "1px",
          borderColor: brColor,
          fontSize: "12px",
        }}
      >
        {children}
      </div>
    </>
  );
}
export default DinamicStyleProps;
