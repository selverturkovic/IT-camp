// import { useState } from "react";

// const Select = ({ M, L, XL, XXL }) => {
//   const [value, setValue] = useState("");

//   return (
//     <div>
//       <select style={{ height: 40, width: 40 }} name="" id="">
//         <option
//           value={M}
//           onChange={(e) => {
//             setValue(e.target.value);
//           }}
//         >
//           M
//         </option>
//         <option
//           value={XXL}
//           onChange={(e) => {
//             setValue(e.target.value);
//           }}
//         >
//           XXL
//         </option>
//         <option
//           value={L}
//           onChange={(e) => {
//             setValue(e.target.value);
//           }}
//         >
//           L
//         </option>
//         <option
//           value={XL}
//           onChange={(e) => {
//             setValue(e.target.value);
//           }}
//         >
//           XL
//         </option>
//       </select>
//     </div>
//   );
// };
// export default Select;
const Select = (props) => {
  return (
    <select>
      {props?.list &&
        props.list.length &&
        props.list.map((element, index) => (
          <option key={index}>{element}</option>
        ))}
    </select>
  );
};
export default Select;
