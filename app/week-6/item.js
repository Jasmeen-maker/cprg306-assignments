export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 border-b border-gray-300">
      <span className="font-semibold">{name}</span> — 
      <span> Quantity: {quantity}, </span>
      <span className="capitalize">Category: {category}</span>
    </li>
  );
}
