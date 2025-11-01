"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  // Clean up item names before sending to API
  function cleanItemName(name) {
    return name
      .split(",")[0] // remove quantity part
      .replace(/[^\p{L}\p{N}\s]/gu, "") // remove emoji/symbols
      .trim()
      .toLowerCase();
  }

  function handleItemSelect(name) {
    const cleanedName = cleanItemName(name);
    setSelectedItemName(cleanedName);
  }

  return (
    <main style={{ display: "flex", alignItems: "flex-start", gap: "2rem" }}>
      <div>
        <h1>Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}
