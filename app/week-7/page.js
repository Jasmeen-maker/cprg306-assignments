"use client";

import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./item.json";

export default function Page() {
  // Initialize state with items.json
  const [items, setItems] = useState(itemsData);

  // Handler to add a new item
  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        🛒 Shopping List
      </h1>

      {/* Form for adding new items */}
      <NewItem onAddItem={handleAddItem} />

      {/* Display the list of items */}
      <ItemList items={items} />
    </main>
  );
}
