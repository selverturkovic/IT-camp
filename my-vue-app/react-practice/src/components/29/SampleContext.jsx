import { createContext, useState } from "react";

export const MyContext = createContext({});

const SimpleContextProvider = (props) => {
  const [count, setCount] = useState(0);

  const [number, setNumber] = useState(3);

  return (
    <MyContext.Provider
      value={{
        test: "test",
        count: count,
        setCount: setCount,
        number,
        setNumber,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
export default SimpleContextProvider;
