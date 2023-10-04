// import Text from "./Text";
import Button from "./button";
//mantine.dev, mui.com, tailwindss.css, react component library
const Class8 = () => {
  return (
    <div>
      {/* <Random />
      <Random />
      <Random />
      <Random />
      <Random />
      <Random />
      <Random /> */}
      {/* <Text
        type="h1"
        text="Ovo je h1 najveci tekst element"
        color="blue"
        bold
      />
      <Text
        type="h2"
        text="Ovo je h2 drugi najveci tekst element"
        color="grey"
        bold={false}
      />
      <Text
        type="h3"
        text="Ovo je h3 treci najveci tekst element"
        color="red"
        bold
      />
      <Text
        type="h4"
        text="Ovo je h4 cetvrti najveci tekst element"
        color="green"
        bold={false}
      />
      <Text type="title" text="Ovo je title naslov" color="aqua" />
      <Text type="normal" text="Ovo je normal tekst" color="yellow" /> */}
      <Button button="default" text="Button" />
      <Button button="Filled" text="Button" color="white" background="green" />
    </div>
  );
};

export default Class8;
