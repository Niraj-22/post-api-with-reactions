// import { useEffect } from "react";
// import { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [post, setPost] = useState([]);

//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;

//     fetch("https://dummyjson.com/posts", { signal })
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setPost(data.posts);
//       });

//     return () => {
//       controller.abort();
//     };
//   }, []);

//   const handleIncrement = (index) => {
//     // Create a copy of the data array
//     const newData = [...post];
//     // Increment the counter for the specific object
//     newData[index].counter = (newData[index].counter || 0) + 1;
//     // Update state with the modified array
//     setPost(newData);
//   };
//   return (
//     <div className="container">
//       <ul>
//         {post.map((i, index) => (
//           <li key={index} className="card">
//             {i.title}
//             <p>
//               <i>{i.body}</i>
//             </p>
//             <button onClick={handleIncrement(index)}>{i.counter || 0}</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API and update state
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const jsonData = await response.json();
        setData(jsonData.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Fetch data on component mount

  const handleIncrement = (index) => {
    // Create a copy of the data array
    const newData = [...data];
    // Increment the counter for the specific object
    newData[index].counter = (newData[index].counter || 0) + 1;
    // Update state with the modified array
    setData(newData);
  };

  const handleDecrement = (index) => {
    // Create a copy of the data array
    const newData = [...data];
    // Increment the counter for the specific object
    newData[index].counter1 = (newData[index].counter1 || 0) + 1;
    // Update state with the modified array
    setData(newData);
  };

  return (
    <div>
      <h1>Posts </h1>
      <ul className="container">
        {data.map((item, index) => (
          <li key={item.title} className="card">
            <strong>{item.title}</strong>
            <p>
              <i>{item.body}</i>
            </p>
            <p>Likes : {item.counter || 0}</p>
            <p>Dislikes : {item.counter1 || 0}</p>

            <button onClick={() => handleIncrement(index)}>👍</button>
            <button onClick={() => handleDecrement(index)}>👎</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
