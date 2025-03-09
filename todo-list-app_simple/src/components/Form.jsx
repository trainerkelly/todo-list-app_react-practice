import { useState } from "react";

// component function
export default function Form({ addItem }) {
  const [newItemName, setNewItemName] = useState("");

  // functions
  function handleSubmit(e) {
    e.preventDefault();
    addItem(newItemName);
    setNewItemName("");
  }

  // component
  return (
    <form onSubmit={handleSubmit} className="form-input">
      <input
        type="text"
        value={newItemName}
        onChange={(e) => {
          setNewItemName(e.target.value);
        }}
      />
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
}
