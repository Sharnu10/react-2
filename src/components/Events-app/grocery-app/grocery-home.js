import { useState } from "react";

import AddItem from "./add-item";
import Footer from "./footer";
import "./grocery-home.css";
import Header from "./header";
import ItemList from "./items-list";

function GroceryHome() {
  let [items, setItems] = useState([]);

  function addItem(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function onItemSelected(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  }

  return (
    <>
      <div className="grocery-container">
        <div className="header">
          <Header />
        </div>
        <div className="item-add-list">
          <AddItem addItem={addItem} />

          <ItemList
            items={items}
            deleteItem={deleteItem}
            onItemSelected={onItemSelected}
          />
        </div>

        <div className="footer">
          <Footer items={items} />
        </div>
      </div>
    </>
  );
}

export default GroceryHome;
