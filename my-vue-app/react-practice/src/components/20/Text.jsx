const Text = ({ type = "h1", text }) => {
  // kondicionalno renderovanje tipova
  const getTypeStyling = () => {
    switch (type) {
      case "h1":
        return { fontSize: "15px" };
      case "paragraph1":
        return { fontWeight: "bold", fontSize: "20px" };
      case "paragraph2":
        return { fontSize: 24, lineHeight: 1.5 };
      case "color":
        return { margin: "10px" };
      case "review":
        return { padding: "10px" };
    }
  };
  return (
    <div>
      <p style={{ ...getTypeStyling() }}>{text}</p>
    </div>
  );
};
export default Text;
