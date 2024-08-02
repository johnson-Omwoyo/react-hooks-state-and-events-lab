import React, { useState } from "react";

function Item({ name, category }) {
  const [mode, setMode] = useState(true);
  const handleCLick = () => {
    mode && setMode(false);
  };
  return (
    <li className={!mode ? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCLick} className={mode == true ? "add" : "remove"}>
        {mode ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
