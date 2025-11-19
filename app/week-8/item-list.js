"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) =>
    a[sortBy].localeCompare(b[sortBy])
  );

  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-2">Shopping List</h2>

      <div className="mb-4">
        <span className="mr-2 font-semibold">Sort by:</span>

        <button
          className="px-2 py-1 mr-2 border rounded"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>

        <button
          className="px-2 py-1 border rounded"
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}
