// // import React, { useContext, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // // mora da ima dva inputa i validaciju tih inputa
// // // inputi su email i password
// // // validacija za email je da je validan email
// // // i mora da ima login button koji loguje korisnika
// // // za napredne implementirati login preko auth rute na dummy json vebsajtu

// // function Login() {
// //   const navigate = useNavigate();
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [passwordError, setPasswordError] = useState("");
// //   const [emailError, setEmailError] = useState("");
// //   //   const { setUser } = useContext(UserContext);

// //   function isEmailValid(email) {
// //     // Regular expression for a simple email validation
// //     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

// //     return emailRegex.test(email);
// //   }

// //   const loginAction = async (formEmail, formPassword) => {
// //     try {
// //       const response = await fetch("https://dummyjson.com/auth/login", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           username: formEmail,
// //           password: formPassword,
// //           // expiresInMins: 60, // optional
// //         }),
// //       });
// //       const data = await response.json();

// //       localStorage.setItem("token", data.token);

// //       navigate("/");
// //       console.log(data);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   const isPasswordValid = (pass) => {
// //     const reg =
// //       /^(?=.[A-Za-z])(?=.\d)(?=.[@!$#&.\\\-+])[A-Za-z\d@!$#&*.\\\-+]{8,}$/;
// //     return reg.test(pass)
// //       ? "Ispravan"
// //       : "Your password should have a minimum of 8 characters and contain a mix of letters, numbers, and special characters. For example, you could use Pass1122# as a valid password.";
// //   };
// //   const handleLogin = async () => {
// //     let valid = true;

// //     if (!isEmailValid(email)) {
// //       setEmailError("email is very very wrong");
// //       valid = false;
// //     } else {
// //       setEmailError("");
// //     }
// //     if (isPasswordValid(password) !== "Ispravan") {
// //       setPasswordError(isPasswordValid(password));
// //       valid = false;
// //     } else {
// //       setPasswordError("");
// //     }

// //     if (valid) {
// //       loginAction(email, password);
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         flexDirection: "column",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         border: "1px solid gray",
// //         borderRadius: "5px",
// //         width: "300px",
// //         margin: "auto",
// //       }}
// //     >
// //       <p> This is login</p>
// //       <input
// //         style={{ padding: "10px", margin: "10px" }}
// //         value={email}
// //         onChange={(e) => {
// //           setEmail(e.target.value);
// //         }}
// //         type="email"
// //         placeholder="email"
// //       />
// //       {emailError && <p style={{ color: "red" }}>{emailError}</p>}
// //       <input
// //         style={{ padding: "10px", margin: "10px" }}
// //         value={password}
// //         onChange={(e) => {
// //           setPassword(e.target.value);
// //         }}
// //         type="password"
// //         placeholder="password"
// //       />
// //       {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
// //       <button
// //         style={{
// //           padding: "10px",
// //           color: "white",
// //           backgroundColor: "blueviolet",
// //           border: "none",
// //           borderRadius: "5px",
// //           margin: "10px",
// //         }}
// //         onClick={handleLogin}
// //       >
// //         Login
// //       </button>
// //     </div>
// //   );
// // }

// // export default Login;

// // mora da ima dva inputa i validaciju tih inputa
// // inputi su email i password
// // validacija za email je da je to validan email
// // i mora da ima login button koji loguje korisnika

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // za napredne implementirati login preko auth rute na dummy json vebsajtu

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");

//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   function isEmailValid(email) {
//     // Regular expression for a simple email validation
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

//     return emailRegex.test(email);
//   }

//   const loginAction = async (formEmail, formPassword) => {
//     try {
//       const response = await fetch("https://dummyjson.com/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username: formEmail,
//           password: formPassword,
//           // expiresInMins: 60, // optional
//         }),
//       });

//       const data = await response.json();

//       localStorage.setItem("token", data.token);

//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleLogin = async () => {
//     let valid = true;

//     if (!isEmailValid(email)) {
//       setEmailError("email is very very wrong");
//       valid = false;
//     } else {
//       setEmailError("");
//     }

//     if (password.length < 8) {
//       setPasswordError("Password wrong");
//       valid = false;
//     } else {
//       setPasswordError("");
//     }

//     // if (valid) {
//     loginAction(email, password);
//     // }
//   };

//   return (
//     <div>
//       <input value={email} onChange={(e) => setEmail(e.target.value)} />
//       {emailError && <p>{emailError}</p>}

//       <input value={password} onChange={(e) => setPassword(e.target.value)} />
//       {passwordError && <p>{passwordError}</p>}

//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default Login;

// mora da ima dva inputa i validaciju tih inputa
// inputi su email i password
// validacija za email je da je to validan email
// i mora da ima login button koji loguje korisnika

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// za napredne implementirati login preko auth rute na dummy json vebsajtu

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function isEmailValid(email) {
    // Regular expression for a simple email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return emailRegex.test(email);
  }

  const loginAction = async (formEmail, formPassword) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formEmail,
          password: formPassword,
          // expiresInMins: 60, // optional
        }),
      });

      const data = await response.json();

      localStorage.setItem("token", data.token);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async () => {
    let valid = true;

    if (!isEmailValid(email)) {
      setEmailError("email is very very wrong");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 8) {
      setPasswordError("Password wrong");
      valid = false;
    } else {
      setPasswordError("");
    }

    // if (valid) {
    loginAction(email, password);
    // }
  };

  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      {emailError && <p>{emailError}</p>}

      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      {passwordError && <p>{passwordError}</p>}

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
