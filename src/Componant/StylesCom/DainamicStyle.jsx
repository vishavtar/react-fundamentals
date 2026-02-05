import { useState } from "react";
import ProfileCom from "./ProfileCom";

function DainamicStyle() {
  const [conStyle, setConStyle] = useState({});
  const [greed, setGreed] = useState(true);
  const userData = {
    name: "Vishnu",
    userImg: "https://placehold.net/avatar-5.svg",
    location: "Mumbai",
  };
  const themeChange = () => {
    setConStyle({
      style1: { background: "red" },
      style2: { color: "purple" },
      style3: { color: "green" },
    });
  };
  const resatTheme = () => {
    setConStyle({});
  };
  return (
    <div>
      <button onClick={themeChange}>Change Profile Theme</button>{" "}
      <button onClick={resatTheme}>Reset Profile Theme</button>{" "}
      <button onClick={() => setGreed(!greed)}>Greed To Column</button>
      <br />
      <br />
      <div style={greed ? { display: "flex", justifyContent: "center" } : null}>
        <ProfileCom ConStyle={conStyle} data={userData} />
      </div>
    </div>
  );
}
export default DainamicStyle;
