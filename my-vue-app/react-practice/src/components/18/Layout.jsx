import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Layout = ({ children, setPage }) => {
  return (
    <div style={{ display: "relative" }}>
      <Navbar
      //   setPage={setPage}
      />
      <Sidebar />
      <div style={{ paddingLeft: "300px" }}>{children}</div>
    </div>
  );
};
export default Layout;
