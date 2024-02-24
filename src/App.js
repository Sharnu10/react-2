import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import FilterableProductTable from "./components/Products/FilterableProductTable";
import Event from "./components/Events-app/event";
import GroceryHome from "./components/Events-app/grocery-app/grocery-home";
import TabbingHome from "./components/tabbing-app/tabbing-home";

export function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    value === "X" ? setValue(null) : setValue("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {" "}
      {value}{" "}
    </button>
  );
}

export function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <div className="c">
        <BrowserRouter>
          <div>
            <ul className="ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/filterProduct">Product</Link>
              </li>
              <li>
                <Link to="/event-app">Event</Link>
              </li>
              <li>
                <Link to="/grocery">Grocery</Link>
              </li>
              <li>
                <Link to="/tabbingHome">Tabbing Home</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/filterProduct" element={<FilterableProductTable />} />
            <Route path="/event-app" element={<Event />} />
            <Route path="/grocery" element={<GroceryHome />} />
            <Route path="/tabbingHome" element={<TabbingHome />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
