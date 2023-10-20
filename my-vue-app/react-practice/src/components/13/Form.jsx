import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <input
        type="text"
        value={input1}
        onChange={(e) => {
          setInput1(e.target.value);
        }}
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => {
          setInput2(e.target.value);
        }}
      />
      <input type="submit" value="Submit me" />
    </form>
  );
};
export default Form;
