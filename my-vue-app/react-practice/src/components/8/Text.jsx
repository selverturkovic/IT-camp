const Text = ({ type = "h1", text, color, bold = false }) => {
  // const getType = () => {}
  const getTypeStyling = () => {
    switch (type) {
      case "h1":
        return { fontSize: 44, lineHeight: 1.5 };
      case "h2":
        return { fontSize: 34, lineHeight: 1.5 };
      case "h3":
        return { fontSize: 24, lineHeight: 1.5 };
      case "h4":
        return { fontSize: 20, lineHeight: 1.5 };
      case "title":
        return { fontSize: 18, lineHeight: 1.5 };
      case "normal":
        return { fontSize: 16, lineHeight: 1.5 };
    }
  };
  const boldness = bold ? 700 : 400;
  //   if (type === "h1") {
  //     return (
  //       <p style={{ fontSize: 44, fontWeight: 700, lineHeight: 1.5 }}>{text}</p>
  //     );
  //   } else if (type === "h2") {
  //     return (
  //       <p style={{ fontSize: 34, fontWeight: 600, lineHeight: 1.5 }}>{text}</p>
  //     );
  //   } prvo se izvrsi funkcija getTypeStyling objekat se podeli distracuje kopiraju se sve njegove vrednosti sa ... i dodat color u objektu style
  return (
    <p style={{ ...getTypeStyling(), color, fontWeight: boldness }}>{text}</p>
  );
};

export default Text;
