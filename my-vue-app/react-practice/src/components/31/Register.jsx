// import React, { useState } from "react";
// // mora da ima 4 inputa i ozbiljnu validaciju inputa
// // inputi su name, email, password i confirm password
// // name mora biti duze od 3 slova, email mora biti validan email
// // password mora biti duzi od 8 slova imati jedno veliko slovo i jedan znak.
// // confirm password mora biti isti kao password
// // morate imati crveni tekst ispod svakog inputa ako nesto nije tacno
// // button za register
// //za napredne:  koristiti add user rutu za register sa dummy json vebsajta

import { useNavigate } from "react-router-dom";

// function Register() {
//   //     const handleRegister=async ()=>{
//   // try{
//   //     const response = await fetch('https://dummyjson.com/users/add', {
//   //     method: 'POST',
//   //     headers: { 'Content-Type': 'application/json' },
//   //     body: JSON.stringify({
//   //       firstName: 'Muhammad',
//   //       lastName: 'Ovi',
//   //       age: 250,
//   //       /* other user data */
//   //     })
//   //   })
//   // }}

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [confirmPasswordError, setConfirmPasswordError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [name, setName] = useState("");
//   const [nameError, setNameError] = useState("");
//   const [emailError, setEmailError] = useState("");

//   function isEmailValid(email) {
//     // Regular expression for a simple email validation
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

//     return emailRegex.test(email);
//   }

//   const isPasswordValid = (pass) => {
//     const reg =
//       /^(?=.[A-Za-z])(?=.\d)(?=.[@!$#&.\\\-+])[A-Za-z\d@!$#&*.\\\-+]{8,}$/;
//     return reg.test(pass)
//       ? "Ispravan"
//       : "Your password should have a minimum of 8 characters and contain a mix of letters, numbers, and special characters. For example, you could use Pass1122# as a valid password.";
//   };
//   const handleLogin = async () => {
//     let valid = true;

//     if (name.length < 3) {
//       setNameError("Name is not correct");
//       valid = false;
//     } else {
//       setNameError("");
//     }
//     if (!isEmailValid(email)) {
//       setEmailError("email is very very wrong");
//       valid = false;
//     } else {
//       setEmailError("");
//     }
//     if (isPasswordValid(password) !== "Ispravan") {
//       setPasswordError(isPasswordValid(password));
//       valid = false;
//     } else {
//       setPasswordError("");
//     }
//     if (confirmPassword !== password) {
//       setConfirmPasswordError("Not match with password");
//       valid = false;
//     } else {
//       setConfirmPasswordError("");
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         border: "1px solid gray",
//         borderRadius: "5px",
//         width: "300px",
//         margin: "auto",
//       }}
//     >
//       <p style={{ margin: "10px" }}> This is register</p>
//       <input
//         style={{ padding: "10px", margin: "10px" }}
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//         type="text"
//         placeholder="ime"
//       />
//       {nameError && <p style={{ color: "red" }}>{nameError}</p>}
//       <input
//         style={{ padding: "10px", margin: "10px" }}
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//         type="email"
//         placeholder="email"
//       />
//       {emailError && <p style={{ color: "red" }}>{emailError}</p>}
//       <input
//         value={password}
//         style={{ padding: "10px", margin: "10px" }}
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//         type="password"
//         placeholder="password"
//       />
//       {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
//       <input
//         style={{ padding: "10px", margin: "10px" }}
//         value={confirmPassword}
//         onChange={(e) => {
//           setConfirmPassword(e.target.value);
//         }}
//         type="password"
//         placeholder="Confirmpassword"
//       />
//       {confirmPasswordError && (
//         <p style={{ color: "red" }}>{confirmPasswordError}</p>
//       )}
//       <button
//         style={{
//           padding: "10px",
//           color: "white",
//           backgroundColor: "blueviolet",
//           border: "none",
//           borderRadius: "5px",
//           margin: "10px",
//         }}
//         onClick={handleLogin}
//       >
//         Register
//       </button>
//     </div>
//   );
// }

// export default Register;

// mora da ima 4 inputa i ozbiljnu validaciju tih inputa
// inputi su name, email, password i confrim password
// name mora biti duze od 3 slova, email mora biti validan email
// password mora biti duzi od 8 slova, imati jedno veliko slovo i jedan znak
// confirm password mora biti isti kao password\
// morate imati crveni tekst ispod svakog inputa ako nesto nije tacno
// i naravno button za register

//za napredne:  koristiti add user rutu za register sa dummy json vebsajta

function Register() {
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "Muhammad",
          lastName: "Ovi",
          age: 250,
          /* other user data */
        }),
      });
      const data = await response.json();
      navigate("/login");

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="email" />
      <input type="password" placeholder="password" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
