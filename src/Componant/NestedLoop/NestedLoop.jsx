import UserDataComp from "./UserDataComp";

function NestedLoop() {
  const usersList = [
    {
      id: 1,
      name: "John Doe",
      contact: {
        email: "john@example.com",
        phone: "123-456-7890",
      },
      hobbies: ["Reading", "Gardening", "Coding"],
      postInfo: [
        {
          address: "Mumbai",
          pinCode: "421204",
        },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      contact: {
        email: "jane@example.com",
        phone: "987-654-3210",
      },
      hobbies: ["Painting", "Cooking"],
      postInfo: [
        {
          address: "Delhi",
          pinCode: "100006",
        },
      ],
    },
  ];

  return (
    <div>
      <h2 style={{ color: "red" }}>
        User List USing Nested Loops with component
      </h2>
      {usersList.map((users, index) => (
        <div key={index}>
          <UserDataComp userData={users} />
        </div>
      ))}
    </div>
  );
}
export default NestedLoop;
