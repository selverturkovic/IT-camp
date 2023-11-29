import { useContext } from "react";
import { UserContext } from "./ContextProvider";
import LoginForm from "./LoginForm";

const Class30 = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  return (
    <div
      style={{ border: "1px solid gray", width: "350px", borderRadius: "20px" }}
    >
      {user && (
        <div>
          <img src={user.image} alt="" />
          <div style={{ padding: "10px" }}>
            <p>Name: {user.firstName}</p>
            <p>Lastname: {user.lastName}</p>
            <p>City: {user.address.city}</p>
            <p>Email: {user.email}</p>
            <p>Eyecolor: {user.eyeColor}</p>
            <button
              onClick={() => {
                setUser(undefined);
              }}
            >
              Log out
            </button>
          </div>
        </div>
      )}
      {!user && <LoginForm />}
    </div>
  );
};
export default Class30;
