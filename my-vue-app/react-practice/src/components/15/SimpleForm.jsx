import { useState } from "react";

const SimpleForm = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    const newError = { name: "", surname: "", email: "", password: "" };
    if (data.name.length <= 4) {
      newError.name = "Name must be longer than 4 characters";
    }
    if (data.surname.length <= 4) {
      newError.surname = "Name must be longer than 4 characters";
    }
    if (!isEmailValid(data.email)) {
      newError.email = "Email must be in email format";
    }
    if (
      data.password.length <= 8 ||
      data.password.toLowerCase() === data.password
    ) {
      newError.password =
        "Password must be longer then 8 chars and have at least one uppercase chart";
    }
    if (
      newError.name ||
      newError.surname ||
      newError.email ||
      newError.password
    ) {
      setError(newError);
    } else {
      // submit this to a function
      console.log(data);
      setError(newError);
    }
  };
  return (
    <div>
      <div>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        />
        {error.name && <p style={{ margin: 0, color: "red" }}>{error.name}</p>}
      </div>
      <div>
        <label htmlFor="">Surname</label>
        <input
          type="text"
          value={data.surname}
          onChange={(e) => {
            setData({
              name: data.name,
              surname: e.target.value,
              email: data.email,
              password: data.password,
            });
          }}
        />
        {error.surname && <p>{error.surname}</p>}
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => {
            setData({
              name: data.name,
              surname: data.surname,
              email: e.target.value,
              password: data.password,
            });
          }}
        />
        {error.email && <p>{error.email}</p>}
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={data.password}
          onChange={(e) => {
            setData({
              name: data.name,
              surname: data.surname,
              email: data.email,
              password: e.target.value,
            });
          }}
        />
        {error.password && <p>{error.password}</p>}
      </div>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default SimpleForm;
