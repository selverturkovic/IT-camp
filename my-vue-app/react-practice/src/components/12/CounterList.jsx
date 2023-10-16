import { useState } from "react";
const CounterList = () => {
  const [list, setList] = useState(["text 1", "text 2"]);
  return (
    <div>
      <button
        onClick={() => {
          setList([...list, `text ${list.length + 1}`]);
          console.log(list);
        }}
      >
        add paragraph
      </button>
      {list.map((value, index) => {
        return (
          <p key={index}>
            {/* text {index + 1} */}
            {value}
          </p>
        );
      })}
    </div>
  );
};
export default CounterList;
