export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="border p-3 mb-2 rounded cursor-pointer hover:bg-gray-100"
      onClick={onSelect}
    >
      <h3 className="font-bold">{name}</h3>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}
