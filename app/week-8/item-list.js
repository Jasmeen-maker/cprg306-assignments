"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    return sortBy === "name"
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category);
  });

  return (
    <div>
      <div>
        <button onClick={() => setSortBy("name")}>Sort by Name</button>
        <button onClick={() => setSortBy("category")}>Sort by Category</button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item key={item.name} {...item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}
