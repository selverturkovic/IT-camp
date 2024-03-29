import { useState } from "react";

const Check = () => {
  // prvi ako je true drugi i treci false i ne mogu da se menjaju
  // drugi true prvi je false i ne moze da se menja
  // treci nema pravila
  const [checked, setChecked] = useState({
    first: false,
    second: false,
    third: false,
  });
  return (
    <div>
      <label htmlFor="">
        First{" "}
        <input
          type="checkbox"
          checked={checked.first}
          onChange={() => {
            if (checked.second) {
              return;
            }
            if (!checked.first) {
              setChecked({
                first: !checked.first,
                second: false,
                third: false,
              });
            } else {
              setChecked({
                ...checked,
                first: !checked.first,
                second: false,
                third: false,
              });
            }
          }}
        />
      </label>
      <label htmlFor="">
        Second{" "}
        <input
          type="checkbox"
          checked={checked.second}
          onChange={() => {
            setChecked({ ...checked, second: !checked.second });
          }}
        />
      </label>
      <label htmlFor="">
        Third{" "}
        <input
          type="checkbox"
          checked={checked.third}
          onChange={() => {
            if (checked.first) {
              return;
            }
            setChecked({ ...checked, third: !checked.third });
          }}
        />
      </label>
    </div>
  );
};

export default Check;
