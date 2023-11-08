// const RoundButton = ({ type = "roundButton1", button }) => {
//   const getTupeStyling = () => {
//     switch (type) {
//       case "roundButton1":
//         return {
//           width: 40,
//           height: 40,
//           color: "black",
//           borderRadius: "50%",
//           padding: 20,
//         };
//       case "roundButton2":
//         return {
//           width: 40,
//           height: 40,
//           color: "black",
//           borderRadius: "50%",
//           padding: 20,
//         };
//       case "roundButton3":
//         return {
//           width: 40,
//           height: 40,
//           color: "black",
//           borderRadius: "50%",
//           padding: 20,
//         };
//     }
//   };
//   return (
//     <div>
//       <button style={{ ...getTupeStyling }}>{button}</button>
//     </div>
//   );
// };
// export default RoundButton;

const RoundButton = (props) => {
  return (
    <div
      style={{
        width: 25,
        height: 25,
        borderRadius: 15,
        background: props.color,
        border: "1px solid black",
        cursor: "pointer",
      }}
      onClick={() => props?.onClick()}
    ></div>
  );
};

export default RoundButton;
