import Styles from "./Styles.module.css";
import styled from "styled-components";
const Title = styled.h1`
  background: red;
  font-size: 20px;
  color: white;
  padding: 5px;
  @media (max-width: 768px) {
    font-size: 14px;
    background: green;
  }
`;
const Content = styled.div({
  color: "#ff0000",
  background: "#ffa1a1",
  fontSize: "14px",
  borderRadius: "5px",
  padding: "5px",
  marginBottom: "15px",
});
function ModuleAndComponantStyle() {
  return (
    <>
      <div className={Styles.heading}>Module Css Heading</div>
      <Title>Styled Components Heading</Title>
      <Content>Content component used form style </Content>
    </>
  );
}
export default ModuleAndComponantStyle;
