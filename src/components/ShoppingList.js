import React, { useState } from "react";
import items from "../data/items";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelected] = useState('All')
  
  
  function handleFilterChange(event){
    setSelected(event.target.value)
    }
    
  const itemsFilter = items.filter((item) => {
    if (selectedCategory === "All") return true

    return item.category === selectedCategory
    
    }
  )
  
  
  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
      {itemsFilter.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
       ))}
      
      </ul>
    </div>
  );
}

export default ShoppingList;
