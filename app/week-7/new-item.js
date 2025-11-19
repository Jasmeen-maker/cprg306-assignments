"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Math.random().toString(36).substring(2, 10),
      name,
      quantity,
      category,
    };

    onAddItem(newItem); // send item to parent
    setName("");        // clear form
    setQuantity(1);
    setCategory("produce");
  }

  const increase = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded mb-6 max-w-md space-y-4"
    >
      <h2 className="text-xl font-semibold">Add New Item</h2>

      {/* Item Name */}
      <div>
        <label className="block mb-1">Item Name</label>
        <input
          className="border px-2 py-1 w-full"
          placeholder="e.g., milk, 4 L 🥛"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Quantity */}
      <div>
        <label className="block mb-1">Quantity (1–20)</label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={decrease}
            className="border px-3 py-1"
          >
            −
          </button>

          <span>{quantity}</span>

          <button
            type="button"
            onClick={increase}
            className="border px-3 py-1"
          >
            +
          </button>
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="block mb-1">Category</label>
        <select
          className="border px-2 py-1 w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="household">Household</option>
        </select>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Item
      </button>
    </form>
  );
}
