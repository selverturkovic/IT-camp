// const Button = ({ button }) => {
//   return (
//     <button
//       style={{
//         background: "Blue",
//         color: "white",
//         padding: "10px 20px",
//         borderRadius: "4px",
//         border: "none",
//         marginRight: "10px",
//       }}
//     >
//       {button}
//     </button>
//   );
// }; // bold felowship i linkedin
// export default Button;

const Button = (props) => {
  return <button onClick={() => props?.onClick()}>{props.title}</button>;
};

export default Button;
