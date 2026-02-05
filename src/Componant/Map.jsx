function MapComponent({ userInfo }) {
  return (
    <ul
      style={{
        listStyle: "none",
        border: "solid 1px red",
        marginBottom: "10px",
      }}
    >
      <li>{userInfo.id}</li>
      <li>{userInfo.name}</li>
      <li>{userInfo.age}</li>
      <li>{userInfo.address}</li>
    </ul>
  );
}

export { MapComponent };

function Map() {
  const userData = [
    {
      name: "vishnu",
      age: 36,
      address: "Dombivali East Mumbai",
      id: 1,
    },
    {
      name: "Tejal ",
      age: 26,
      address: "Mabglapue Tal: Sangmner",
      id: 2,
    },
    {
      name: "Rajveer",
      age: 5,
      address: "Mumbai",
      id: 3,
    },
  ];

  return (
    <div>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <td>User ID</td>
            <td>User Name</td>
            <td>User Age</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>using map in other Component </h4>
      <div>
        {userData.map((items) => (
          <div key={items.id}>
            <MapComponent userInfo={items} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Map;
