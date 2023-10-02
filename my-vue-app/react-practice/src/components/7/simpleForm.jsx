import { makeUpperCase } from "./utils";
const SimpleForm = ({ defaultInput, buttonTitle, onComplete }) => {
  // da se doda varijabla props.nesto
  //   const complete = (e) => {
  //     console.log(e.target);
  //   };

  const onChange = (e) => {
    console.log(makeUpperCase(e.target.value));
  };
  return (
    <div>
      <input defaultValue={defaultInput} onChange={(e) => onChange(e)} />
      <button onClick={onComplete}>{buttonTitle}</button>
    </div>
  );
};

export default SimpleForm;
