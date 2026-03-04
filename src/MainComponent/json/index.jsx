import { Link, NavLink, Outlet, Route, Routes } from "react-router";
import AddUser from "./AddUser";
import UserList from "./UserList";

export default function User() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "80%",
          background: "#ffe7ca",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Link to="/react-fundamentals/user">Users List</Link>
        <Link to="/react-fundamentals/user/addNewUser">Add New User </Link>
      </div>
      <UserList />

      {/*  */}
      {/* <AddUser />
      <UserList /> */}
      {/* <Routes>
        <Route path="/react-fundamentals/addNewUser" element={<AddUser />} />
        <Route path="/react-fundamentals/user" element={<UserList />} />
      </Routes> */}
    </>
  );
}
