import { useState } from "react";
import Form from "./Form";
import FormObject from "./FormObject";
import ListManipulation from "./ListManipulation";
// import TextInput from "./TextInput";

const Class13 = () => {
  const [text, setText] = useState("");
  //ustate vraca array koji ima dve vrednosti
  // sintaksa za destructering
  return (
    <div>
      {/* <TextInput onChange={(text) => console.log(text)} /> */}
      <Form />
      <FormObject />
      <ListManipulation />
    </div>
  );
};

export default Class13;
