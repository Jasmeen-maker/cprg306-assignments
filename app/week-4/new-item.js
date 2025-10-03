// app/week-4/new-item.js
"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  // Increment function
  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  // Decrement function
  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center space-y-4 w-72">
      <h2 className="text-xl font-semibold">Select Quantity</h2>
      <div className="flex items-center space-x-4">
         {/* button 1 */}
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded-lg font-bold ${
            quantity === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-red-500 text-white hover:bg-red-600"
          }`}
        >
          -
        </button>

        
        <span className="text-2xl font-bold">{quantity}</span>

        {/* button 2 */}
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded-lg font-bold ${
            quantity === 20
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          +
        </button>
      </div>
      <p className="text-gray-600 text-sm">
        Allowed Range : 1-20
      </p>
    </div>
  );
}
