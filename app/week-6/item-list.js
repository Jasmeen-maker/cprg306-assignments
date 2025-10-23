"use client";
import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      {/* Sort Buttons */}
      <div className="flex items-center gap-2 mb-5">
        <span className="font-semibold">Sort by:</span>

        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded-md border ${
            sortBy === "name"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-gray-100 text-black border-gray-300"
          }`}
        >
          Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded-md border ${
            sortBy === "category"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-gray-100 text-black border-gray-300"
          }`}
        >
          Category
        </button>
      </div>

      {/* Items List */}
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
