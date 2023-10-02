import "./button.css";
const Button = ({ title = "Click", style = {}, className = "", onPress }) => {
  return (
    <button
      className={`button ${className}`}
      style={style}
      onClick={() => {
        if (onPress) onPress();
      }}
    >
      {title}
    </button>
  );
};
export default Button;
