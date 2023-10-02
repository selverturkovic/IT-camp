// import SimpleForm from "./simpleForm";
// import Button from "./button";
import Input from "./input";
const Class7 = () => {
  const finish = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <div>
      {/* <SimpleForm
        defaultInput="input"
        buttonTitle="Sumbit"
        onComplete={finish}
      /> */}
      {/* <Button title="Sumbit" style={{ border: "3px solid black" }} />
      <Button className="borderBlack" onPress={(e) => console.log(e)} />
      <Button /> */}
      <Input
        style={{ padding: "10px", background: "white" }}
        className="input"
        type="text"
        placeholder={"Tekst"}
        onChangeText={(value) => console.log(value)}
        defaultValue="myInput"
      />
      <Input />
    </div>
  );
};

export default Class7;
