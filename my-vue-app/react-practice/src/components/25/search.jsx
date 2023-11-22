// import { useState } from "react";

// const Search = () => {
//   const [data, setData] = useState();
//   const [minLength, setMinLength] = useState();
//   const [maxLength, setMaxLength] = useState();
//   //   "https://api.quotable.io/random?key=value&key2=value2
//   const getQuote = async () => {
//     try {
//       let apiURL = "https://api.quotable.io/random";
//       if (minLength !== "" && minLength !== "0") {
//         apiURL += "?minLength=" + minLength;
//       }

//       if (maxLength !== "" && maxLength !== "0") {
//         // apiURL += apiURL.includes("?") ? "&" : "?";
//         if (apiURL.includes("?")) {
//           apiURL += "&minLength=" + minLength;
//         } else {
//           apiURL += "?minLength=" + minLength;
//         }
//       }

//       const response = await fetch(apiURL);
//       const responseData = await response.json();
//       setData(responseData);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   //   getQuote();
//   return (
//     <div>
//       <input
//         type="number"
//         name="minLength"
//         id=""
//         value={minLength}
//         placeholder="min"
//         onClick={(e) => {
//           return setMinLength(e.target.value);
//         }}
//       />
//       <input
//         type="number"
//         name="maxLength"
//         value={maxLength}
//         placeholder="max"
//         onClick={(e) => {
//           return setMaxLength(e.target.value);
//         }}
//       />
//       <button onClick={getQuote}>Get quote</button>

//       <p>Autor: {data?.author} </p>
//       <p>Quote: {data?.content} </p>
//     </div>
//   );
// };
// export default Search;
import { useState } from "react";

const Search = () => {
  const [data, setData] = useState();
  const [minLength, setMinLength] = useState("");
  const [maxLength, setMaxLength] = useState("");
  const [author, setAuthor] = useState("");

  //   da ne zavisi od stejta vec od url search parametara
  // const params = new URLSearchParams();
  // params.get("aut")
  // params.set("author","Albert")

  const getQuote = async () => {
    try {
      let apiURL = "https://api.quotable.io/random?";

      if (minLength !== "" && minLength !== "0") {
        apiURL += "?minLength=" + minLength;
      }

      if (maxLength !== "" && maxLength !== "0") {
        apiURL += apiURL.includes("?") ? "&" : "?";
        apiURL += "maxLength=" + maxLength;
      }

      if (author !== "" && author !== "0") {
        apiURL += apiURL.includes("?") ? "&" : "?";
        apiURL += "author=" + author;
      }

      const response = await fetch(apiURL);
      const responseData = await response.json();

      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="number"
        name="minLength"
        value={minLength}
        onChange={(e) => setMinLength(e.target.value)}
        placeholder="min"
      />
      <input
        type="number"
        name="maxLength"
        placeholder="max"
        value={maxLength}
        onChange={(e) => setMaxLength(e.target.value)}
      />
      <input
        type="text"
        name="author"
        placeholder="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={getQuote}>Get quote</button>

      <p>Author: {data?.author}</p>
      <p>Quote: {data?.content}</p>
    </div>
  );
};

export default Search;
