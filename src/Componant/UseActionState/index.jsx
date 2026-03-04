import { useActionState } from "react";

function UseActionState() {
  async function fromData(previusData, fromData) {
    console.log(previusData);

    let name = fromData.get("name");
    let password = fromData.get("password");

    await new Promise((set) => setTimeout(set, 5000));
    if (password && name) {
      return {
        message: "Your name and password submitted",
        name,
        password,
      };
    } else {
      return {
        error: "Please enter username and password",
        name,
        password,
      };
    }
  }

  const [data, action, pending] = useActionState(fromData, undefined);

  return (
    <>
      <form action={action}>
        <input
          defaultValue={data?.name}
          type="text"
          placeholder="User Name"
          name="name"
        />
        <br />
        <br />
        <input
          defaultValue={data?.password}
          type="password"
          placeholder="Password"
          name="password"
        />
        <br />
        <br />
        <button disabled={pending} type="submit">
          Submit
        </button>
      </form>
      {data?.message && <p style={{ color: "green" }}>{data?.message}</p>}
      {data?.error && <p style={{ color: "red" }}>{data?.error}</p>}
      <br />
      <p>Name: {data?.name}</p>
      <p>Password: {data?.password}</p>
    </>
  );
}
export default UseActionState;
