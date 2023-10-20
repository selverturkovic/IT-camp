import { useState } from "react";

const FormObject = () => {
  const [input, setInput] = useState({
    text1: "",
    text2: "",
    text3: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };
  //   const b = { text: "1" };
  //   const a = { text: "", text2: "" };
  //   const c = { ...b, ...a };
  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        value={input.text1}
        onChange={(e) => {
          //   input.text1 = e.target.value;
          //   setInput(input);
          setInput({ ...input, text1: e.target.value });
          //destrackt sve vrednosti ... i predhodna vrednost za text1 ce da se promeni
          //   setInput({
          //     text1: e.target.value,
          //     text2: input.text2,
          //     text3: input.text3,
          //   }); // setanje stejta na objektu dva objekta su ista ako im je referenca ista
        }}
      />
      <input
        type="text"
        value={input.text2}
        onChange={(e) => {
          setInput({
            text1: input.text1,
            text2: e.target.value,
            text3: input.text3,
          });
        }}
      />
      <input
        type="text"
        value={input.text3}
        onChange={(e) => {
          setInput({
            text1: input.text1,
            text2: input.text2,
            text3: e.target.value,
          });
        }}
      />
      <input type="submit" value="Submit me" />
    </form>
  );
};
export default FormObject;
