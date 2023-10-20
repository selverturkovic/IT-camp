import { useState } from "react";

const ListManipulation = () => {
  const [list, setList] = useState([1, 2]);
  return (
    <div>
      <button
        onClick={() => {
          return setList([...list, `text`]);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          const newState = [...list];
          newState.pop();
          setList(newState);
        }}
      >
        Remove
      </button>
      {list.map((value, key) => {
        return (
          <p onClick={() => console.log("click")} key={index}>
            {value}
          </p>
        );
      })}
    </div>
  );
};

export default ListManipulation;
// domaci da se klikne na jedan od p elemenata da se skloni iz statea
