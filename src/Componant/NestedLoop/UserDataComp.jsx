import Hobbies from "./Hobbies";
import PastelInfo from "./PostelInfo";

const UserDataComp = ({ userData }) => {
  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          background: "orange",
          border: "solid 1px orange",
          padding: "0",
          color: "black",
        }}
      >
        <li>{userData.id}</li>
        <li>{userData.name}</li>
        <li>{userData.contact.email}</li>
        <li>{userData.contact.phone}</li>
        <li>
          <h3>Hobbies</h3>
          <Hobbies hobbies={userData.hobbies} />
          <PastelInfo postInfo={userData.postInfo} />
        </li>
      </ul>
    </div>
  );
};

export default UserDataComp;
