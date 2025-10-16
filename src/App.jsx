import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    { text: "a", checked: false },
    { text: "b", checked: false },
    { text: "c", checked: false },
  ]);

  const handleSaveItem = () => {
    if (value === "") {
      alert("Value must not be empty");
    } else {
      setItems([...items, { text: value, checked: false }]);
      setValue("");
    }
  };

  const deleteItem = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const toggleCheck = (indexToToggle) => {
    const updatedItems = items.map((item, index) =>
      index === indexToToggle
        ? { ...item, checked: !item.checked }
        : item
    );
    setItems(updatedItems);
  };

  return (
    <div className="container">
      <div className="addBar">
        <h1>🌟To-Do List🌟</h1>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={value}
          onChange={handleInputChange}
          className="input"
        />
        <button onClick={handleSaveItem}>Add</button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={`todo-item ${item.checked ? "checked" : ""}`}
          >
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleCheck(index)}
            />
            <span>{item.text}</span>
            <button
              className="delete-btn"
              onClick={() => deleteItem(index)}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
