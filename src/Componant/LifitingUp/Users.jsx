function Users({ users }) {
  return (
    <>
      <h3>Users Data List : Fetch from Other Component </h3>
      <h4>
        {users.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </h4>
    </>
  );
}
export default Users;
