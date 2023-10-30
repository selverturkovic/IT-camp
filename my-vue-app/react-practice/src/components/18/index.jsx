import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Layout from "./Layout";
import Product from "./Product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const Class18 = () => {
  //   const [page, setPage] = useState(0);
  const url = window.location.pathname;
  return (
    <div>
      {/* <Layout setPage={setPage}>
        {url === "/home" && <Home />}
        {url === "/product" && <Product />}
        {url === "/about" && <Contact />}
        {url === "/contact" && <About />}
      </Layout> */}
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
};

export default Class18;
