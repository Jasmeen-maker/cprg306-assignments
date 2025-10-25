"use client";
import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  // Initialize state with items.json
  const [items, setItems] = useState(itemsData);

  // Function to handle adding a new item
  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Shopping List 🛒</h1>

      {/* Form to add new item */}
      <NewItem onAddItem={handleAddItem} />

      {/* Display sortable item list */}
      <ItemList items={items} />
    </main>
  );
}
