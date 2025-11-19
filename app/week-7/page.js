"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./item.json";

export default function Page() {
  // initialize items state using items.json
  const [items, setItems] = useState(itemsData);

  // add new item handler
  function handleAddItem(newItem) {
    setItems([...items, newItem]); // create a new array
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Week 7 — Shopping List</h1>

      {/* NEW ITEM FORM */}
      <NewItem onAddItem={handleAddItem} />

      {/* ITEM LIST */}
      <ItemList items={items} />
    </main>
  );
}
