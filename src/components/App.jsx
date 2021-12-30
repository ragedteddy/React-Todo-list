import React, { useState } from "react";

function App() {
  const [listitems, setlistitems] = useState([]);
  const [item, setItem] = useState("");

  function handleClick() {
    setlistitems((prevList) => {
      return [...listitems, item];
    });
    setItem("");
  }

  function handleChange(event) {
    setItem(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listitems.map((itemname) => {
            return <li>{itemname}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
