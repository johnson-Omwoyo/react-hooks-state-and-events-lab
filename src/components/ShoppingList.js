import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [categor, setCategory] = useState("All");
  const handleSelect = (e) => {
    setCategory(e.target.value);
  };
  const displayer = items.filter(
    (item) => categor === "All" || item.category === categor
  );

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelect} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayer.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
