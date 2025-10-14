"use client";

import { useState } from "react";

export default function NewItem() {

  const [name, setName] = useState("");         
  const [quantity, setQuantity] = useState(1);  
  const [category, setCategory] = useState("produce"); 

  
  const handleSubmit = (event) => {
    event.preventDefault(); 

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log("New Item:", item);

    
    alert(`Added Item:
    Name: ${name}
    Quantity: ${quantity}
    Category: ${category}`);

    
    setName("");
    setQuantity(1);
    setCategory("produce");
  };


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
    
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name field */}
        <div>
          <label className="block font-medium text-gray-600 mb-1"> Item Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="e.g., milk,4l "
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Quantity field (already done in Week 4) */}
        <div>
          <label className="block font-medium text-gray-600 mb-1">Quantity(1-20)</label>
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Category field */}
        <div>
          <label className="block font-medium text-gray-600 mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
