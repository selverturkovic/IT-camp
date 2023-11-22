import { useEffect, useState } from "react";
// promis objekat koji moze biti pending kad se ceka reject kad je odbijen catch result je sa then
// web api su consola, fetch,
const Fetch = () => {
  const [data, setData] = useState();
  //asihrona funckija
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://api.quotable.io/random");
        const responseData = await response.json();
        setData(responseData);
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
  console.log(data);
  return (
    <div>
      <p>Autor: {data?.author} </p>
      <p>Quote: {data?.content} </p>
    </div>
  );
};
export default Fetch;
