
"use client";

import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // Sort copy of items (never mutate props)
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <section className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Your Items</h2>

      <div className="mb-4">
        <label className="font-medium mr-2">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-1 rounded"
        >
          <option value="name">Name</option>
          <option value="category">Category</option>
        </select>
      </div>

      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}
