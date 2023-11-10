import { useEffect, useState } from "react";

const SimpleEffects = () => {
  // react lifecycle useEffect asihrone operacije i koriscenje useEffect
  // dependency array [] ako je prazan samo na mountanje komponente se vidi ne na update
  // za fecanje i asinhrone operacije se koristi  useEffect
  const [state, setState] = useState("nesto");
  const [state2, setState2] = useState("nesto2");
  useEffect(() => {
    console.log("render");
  });
  useEffect(() => {
    console.log("render2");
    const getItems = fetch({ method: "get" });
    getItems().then((value) => console.log(value));
  }, []);
  useEffect(() => {
    console.log("render3", state);
  }, [state]);
  //mountanje i updatanje kad se vrednost statea promeni
  return (
    <div>
      {state}
      {state2}
      <button onClick={() => setState("novo")}>button</button>
      <button onClick={() => setState2("novo")}>button</button>
    </div>
  );
};
export default SimpleEffects;
