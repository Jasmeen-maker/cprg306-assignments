"use client";

import { useState } from "react";
import itemsData from "./item.json";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function cleanItemName(name) {
    return name
      .split(",")[0]
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim()
      .toLowerCase();
  }

  function handleItemSelect(item) {
    const cleanedName = cleanItemName(item.name);
    setSelectedItemName(cleanedName);
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="flex gap-6 p-6">
      <div className="w-1/2">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
