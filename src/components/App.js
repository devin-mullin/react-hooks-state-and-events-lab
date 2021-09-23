import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";
import items from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [Light, isOn] = useState(false)
  
  const appClass = Light ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => isOn(!Light)}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData}/>
    </div>
  );
}

export default App;
