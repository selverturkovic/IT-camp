const Navbar = () => {
  const changeUrl = (path) => {
    const obj = { title: path, url: path };
    window.history.pushState(obj, obj.title, obj.url);
  };
  return (
    <nav
      style={{
        display: "flex",
        background: "aqua",
        alignItems: "center",
        border: "1px solid black",
        borderRadius: "8px",
      }}
    >
      {" "}
      <img
        src=""
        alt=""
        width={40}
        height={40}
        style={{ margin: "0 20px", background: "blue" }}
      />
      <p
        href=""
        style={{ padding: "0 20px" }}
        onClick={() => {
          //   setPage(0);
          changeUrl("home");
        }}
      >
        Home
      </p>
      <p
        href=""
        style={{ padding: "0 20px" }}
        onClick={() => {
          //   setPage(1);
          changeUrl("Product");
        }}
      >
        Second Link
      </p>
      <p
        href=""
        style={{ padding: "0 20px" }}
        onClick={() => {
          //   setPage(2);
          changeUrl("About");
        }}
      >
        About
      </p>
      <p
        href=""
        style={{ padding: "0 20px" }}
        onClick={() => {
          //   setPage(3);
          changeUrl("Contact");
        }}
      >
        Contact
      </p>
    </nav>
  );
};
export default Navbar;
