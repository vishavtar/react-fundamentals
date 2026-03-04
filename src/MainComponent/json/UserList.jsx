import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function UserList() {
  const url = "http://localhost:3000/users";
  const [userData, setuserData] = useState([]);
  const [massage, setmessage] = useState();
  const navigate = useNavigate();

  const userListfun = async () => {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    setuserData(result);
  };

  useEffect(() => {
    userListfun();
  }, []);

  async function deleteUser(id, name) {
    let response = await fetch(url + "/" + id, {
      method: "delete",
    });
    const result = await response.json();
    setmessage("User Deleted Sucessfull: " + name);
    id;
    userListfun();
  }
  function editUser(id) {
    navigate("editUser/" + id);
  }
  return (
    <>
      <div className="table">
        <ul className="userList">
          <li>
            <b>Name</b>
          </li>
          <li>
            <b>Age</b>
          </li>
          <li>
            <b>Location</b>
          </li>
          <li>Action</li>
        </ul>
        {userData.map((item) => (
          <ul key={item.id} className="userList">
            <li>{item.name}</li>
            <li>{item.age}</li>
            <li>{item.address}</li>
            <li>
              <button onClick={() => deleteUser(item.id, item.name)}>
                Delete
              </button>{" "}
              <button onClick={() => editUser(item.id)}>Edit</button>
            </li>
          </ul>
        ))}
      </div>
      {massage && <p>{massage}</p>}
    </>
  );
}
