import { useEffect, useState } from "react";

const Timeout = () => {
  const [text, setText] = useState(new Date().toTimeString());

  //   setTimeout(() => { // ne moze da se kontrolise ako se ovako napise
  //     setText(text + 1);
  //     //   setText("newText");
  //   }, 2000);

  //   useEffect(() => {
  //     console.log("effect");
  //     setTimeout(() => {
  //       setText(text);
  //       //   setText("newText");
  //     }, 2000);
  //   }, []);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setText(new Date().toTimeString());
  //     }, 1000);
  //   }); nije dobra praksa
  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <div>{text}</div>;
};
export default Timeout;
