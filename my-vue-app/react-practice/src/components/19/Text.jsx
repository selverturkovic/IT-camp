const Text = ({ type = "h1", text }) => {
  // kondicionalno renderovanje tipova
  const getTypeStyling = () => {
    switch (type) {
      case "h1":
        return { fontSize: "20px", fontWeight: "bold" };
      case "paragraph1":
        return { textAlign: "center" };
      case "paragraph2":
        return { fontSize: 24, lineHeight: 1.5 };
    }
  };
  return (
    <div>
      <p style={{ ...getTypeStyling() }}>{text}</p>
    </div>
  );
};
export default Text;
