import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});
//loadingstate
const ContextProvider = (props) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  //   const loginUser = async () => {
  //     try {
  //       if (searchQ === "") {
  //         return;
  //       }

  //       let apiURL = "https://dummyjson.com/users";

  //       const response = await fetch(apiURL);
  //       const responseData = await response.json();

  //       setData(responseData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  useEffect(() => {
    const loginUser = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users/1");
        const responseData = await response.json();

        // setTimeout(() => {
        throw new Error("it not work");
        setUser(responseData);
        setLoading(false);
        // }, 2000);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    loginUser();
    // fetch("https://dummyjson.com/users")
    //   .then((res) => res.json())
    //   .then(console.log);
    // loginUser();
  }, []);
  if (loading) {
    return <div>loading</div>;
  }
  if (!user) {
    return <div>not Authorized</div>;
  }
  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default ContextProvider;
