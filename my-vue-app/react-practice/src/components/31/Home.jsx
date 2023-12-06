import React, { useContext } from "react";
import { UserContext } from "./UserContextProvider";
// import { UserContext } from "../30/ContextProvider";

function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <p>Name: {user.firstName}</p>
      <p>Lastname: {user.lastName}</p>
      <p>City: {user.address.city}</p>
      <p>Email: {user.email}</p>
      <p>Eyecolor: {user.eyeColor}</p>
      <button
        onClick={() => {
          setUser(undefined);
          localStorage.removeItem("token");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
