import { useState } from "react";
const ToDoList = () => {
  const [data, setData] = useState([
    { text: "pokusaj jedan", selected: false, editing: false },
  ]);
  const [input, setInput] = useState("");
  [...data, {}]; //dodavanje necega u array
  //   data.map((item)=>item.text ? {} : "") update stejta
  // data.filter() da se izbrise iz array uslov zavisi od objekta
  return (
    <div>
      <div style={{ background: "red", padding: "20px 30px" }}>
        <h1 style={{ textAlign: "center" }}>My todo list</h1>

        <div style={{ display: "flex" }}>
          <input
            type="text"
            style={{ margin: 0, padding: 0, width: "75%", height: 40 }}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            style={{ width: "35%", height: 40, margin: 0, padding: 0 }}
            onClick={() => setData([...data, { text: input, selected: false }])}
          >
            Add
          </button>
        </div>
      </div>
      {data &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                backgroundColor: item.selected ? "gray" : "white",
              }}
              onClick={() => {
                // const newState = [...data];
                // newState[index].selected = !newState[index].selected;
                const newState = data.map((item, i) => {
                  if (i === index) {
                    return { ...item, selected: !item.selected };
                  }
                  return item;
                });
                setData(newState);
              }}
            >
              {/* {item.editing ?( <></>:( */}
              <p style={{ flexGrow: 1 }}>{item.text}</p>
              <button
                onClick={() => {
                  const newState = data.map((item, i) => {
                    if (i === index) {
                      return { ...item, editing: !item.editing };
                    }
                    return item;
                  });
                  setData(newState);
                }}
              >
                Edit
              </button>
              <button
                style={{ width: 50 }}
                onClick={() => {
                  const newState = data.filter((item, i) => i !== index);
                  setData(newState);
                }}
              >
                x
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ToDoList;
