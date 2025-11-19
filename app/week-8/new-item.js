"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();

    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border p-4 mb-4 rounded bg-gray-50"
    >
      <h2 className="text-xl font-bold mb-2">Add New Item</h2>

      {/* Item Name */}
      <label className="block mb-2">
        Item Name:
        <input
          className="border p-1 w-full"
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      {/* Quantity 1–20 */}
      <label className="block mb-2">
        Quantity: {quantity}
        <input
          className="w-full"
          type="range"
          min="1"
          max="20"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </label>

      {/* Category */}
      <label className="block mb-2">
        Category:
        <select
          className="border p-1 w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="household">Household</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
        </select>
      </label>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Item
      </button>
    </form>
  );
}
