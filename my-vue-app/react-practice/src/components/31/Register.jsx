import React, { useState } from "react";
// mora da ima 4 inputa i ozbiljnu validaciju inputa
// inputi su name, email, password i confirm password
// name mora biti duze od 3 slova, email mora biti validan email
// password mora biti duzi od 8 slova imati jedno veliko slovo i jedan znak.
// confirm password mora biti isti kao password
// morate imati crveni tekst ispod svakog inputa ako nesto nije tacno
// button za register
//za napredne:  koristiti add user rutu za register sa dummy json vebsajta

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  function isEmailValid(email) {
    // Regular expression for a simple email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return emailRegex.test(email);
  }

  const isPasswordValid = (pass) => {
    const reg =
      /^(?=.[A-Za-z])(?=.\d)(?=.[@!$#&.\\\-+])[A-Za-z\d@!$#&*.\\\-+]{8,}$/;
    return reg.test(pass)
      ? "Ispravan"
      : "Your password should have a minimum of 8 characters and contain a mix of letters, numbers, and special characters. For example, you could use Pass1122# as a valid password.";
  };
  const handleLogin = async () => {
    let valid = true;

    if (name.length < 3) {
      setNameError("Name is not correct");
      valid = false;
    }
    if (!isEmailValid(email)) {
      setEmailError("email is very very wrong");
      valid = false;
    }
    if (isPasswordValid(password) !== "Ispravan") {
      setPasswordError(isPasswordValid(password));
      valid = false;
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError("Not match with password");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid gray",
        borderRadius: "5px",
        width: "300px",
        margin: "auto",
      }}
    >
      <p style={{ margin: "10px" }}> This is register</p>
      <input
        style={{ padding: "10px", margin: "10px" }}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="ime"
      />
      {nameError && <p style={{ color: "red" }}>{nameError}</p>}
      <input
        style={{ padding: "10px", margin: "10px" }}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        placeholder="email"
      />
      {emailError && <p style={{ color: "red" }}>{emailError}</p>}
      <input
        value={password}
        style={{ padding: "10px", margin: "10px" }}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="password"
      />
      {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
      <input
        style={{ padding: "10px", margin: "10px" }}
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
        type="password"
        placeholder="Confirmpassword"
      />
      {confirmPasswordError && (
        <p style={{ color: "red" }}>{confirmPasswordError}</p>
      )}
      <button
        style={{
          padding: "10px",
          color: "white",
          backgroundColor: "blueviolet",
          border: "none",
          borderRadius: "5px",
          margin: "10px",
        }}
        onClick={handleLogin}
      >
        Register
      </button>
    </div>
  );
}

export default Register;
