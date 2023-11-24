import { useContext } from "react";
import { MyContext } from "./SampleContext";

const MyComponent = () => {
  const { test, number, setNumber } = useContext(MyContext);
  console.log(test);
  return (
    <div>
      {test}
      {number}
      <button
        onClick={() => {
          setNumber();
        }}
      >
        Click
      </button>
    </div>
  );
};
export default MyComponent;
