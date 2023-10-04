const Button = ({ button = "default", text, color, background }) => {
  // const getType = () => {}
  const getTypeStyling = () => {
    switch (button) {
      case "default":
        return { padding: 10 };
      case "Filled":
        return { padding: 10, border: "0px", borderRadius: "3px" };
      case "h3":
        return {};
      case "h4":
        return {};
      case "title":
        return {};
      case "normal":
        return {};
    }
  };
  return (
    <button style={{ ...getTypeStyling(), color, background }}>{text}</button>
  );
};

export default Button;
