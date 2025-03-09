import { useState } from "react";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import Items from "./components/Items";

// set localstorage function
function setLocalStorage(items) {
  localStorage.setItem("list", JSON.stringify(items));
}

// get localstorage variable
const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

function App() {
  const [items, setItems] = useState(defaultList);

  // functions
  // add item
  function addItem(itemName) {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  }

  // remove item

  function removeItem(itemId) {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
  }

  // edit item
  function editItem(itemId) {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  }

  console.log(items);

  return (
    <main>
      <div className="wrapper">
        <h1>Simple To-Do List App</h1>
        <p>
          A simple, lightly styled to-do list app based on "Grocery Bud" project
          by John Smilga.
        </p>
        <p>
          I made this as practice for React. There are several more projects in
          this folder...see how I improve and change each one!
        </p>
        <Form addItem={addItem} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
      </div>
    </main>
  );
}

export default App;
