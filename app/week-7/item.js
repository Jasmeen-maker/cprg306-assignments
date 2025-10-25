"use client";

export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center border p-2 rounded bg-gray-50">
      <div>
        <strong>{name}</strong> — {category}
      </div>
      <span className="font-semibold">{quantity}</span>
    </li>
  );
}
