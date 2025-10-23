export default function Item({ name, quantity, category }) {
  return (
    <li className="border rounded-md p-4 mb-3 shadow-sm">
      <p className="text-lg font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="capitalize">Category: {category}</p>
    </li>
  );
}
