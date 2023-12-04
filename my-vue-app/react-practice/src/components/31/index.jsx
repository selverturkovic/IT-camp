import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home";
import Register from "./register";
import Login from "./login";
// npm i react-router-provider

// pravimo register, login, home page
// da napravite rute za to i komponente za svaku rutu
// /=> home /register => register; / login => login
// const router = createBrowserRouter([
//   { path: "/", element: <p>this is home</p> },
//   { path: "/home", element: <p>this is home route</p> },
//   { path: "/home/visit", element: <p>this is nested home route</p> },
// ]);
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);

const Class31 = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default Class31;
