// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./home";
// import Register from "./register";
// import Login from "./login";
// import UserContextProvider from "./UserContextProvider";
// // npm i react-router-provider

// // pravimo register, login, home page
// // da napravite rute za to i komponente za svaku rutu
// // /=> home /register => register; / login => login
// // const router = createBrowserRouter([
// //   { path: "/", element: <p>this is home</p> },
// //   { path: "/home", element: <p>this is home route</p> },
// //   { path: "/home/visit", element: <p>this is nested home route</p> },
// // ]);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <UserContextProvider>
//         <Home />
//       </UserContextProvider>
//     ),
//   },
//   { path: "/register", element: <Register /> },
//   { path: "/login", element: <Login /> },
// ]);

// const Class31 = () => {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// };
// export default Class31;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
// import Login from "./Login";
// import Register from "./Register";
import UserContextProvider from "./UserContextProvider";
import Login from "./login";
import Register from "./register";
// pravimo register, login, home page
// da napravite rute za to i napravite komponenete za svaku rutu
// / => home; /register => register; /login => login

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <Home />
      </UserContextProvider>
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

const Class31 = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default Class31;
