import "./input.css";
const Input = ({
  type = "text",
  className,
  style = {},
  onChangeText,
  placeholder,
  ...other // uzima sve propretije koje posaljes
}) => {
  return (
    <input
      type={type}
      style={style}
      className={`myStyle ${className}`}
      placeholder={placeholder}
      onChange={(e) => onChangeText(e.target.value)}
      {...other} //ostali propertiji rest i distract operator ...other je rest operator izvadi sve propertije iz other i stavi ih u input
    />
  );
};

export default Input;
