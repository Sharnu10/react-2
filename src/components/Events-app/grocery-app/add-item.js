import { useState } from "react";
import "./grocery-home.css";

function AddItem({ addItem }) {
  const [name, setName] = useState("");
  let [quantity, setQuantity] = useState(3);
  let [price, setPrice] = useState(2);

  function onSubmit(event) {
    event.preventDefault();
    if (name === "") return;
    const item = { name, quantity, price, id: Date.now() };
    addItem(item);
    setName("");
    setQuantity(0);
    setPrice(0);
  }

  return (
    <div>
      <h3>Add Item</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Item Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Item Quatity</label>
          <select
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <label>Item Prices per quantity</label>
          <select
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
