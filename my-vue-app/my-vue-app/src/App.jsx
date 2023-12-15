import { Button } from "antd";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // fetch("https://api.quotable.io/random")
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     setData(responseData);
    //   });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          border: "1px solid gray",
          width: "600px",
          height: "200px",
        }}
      >
        <img src="" alt="" />
        <p></p>
      </div>
      <Button type="primary">Primary Button</Button>
    </>
  );
}

export default App;
