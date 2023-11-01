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
//  http jezik preko koga komuniciraju. Tcp ip protokoli imaju pravila kako klienti i server komuniciraju
// hypertext
