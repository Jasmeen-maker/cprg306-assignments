export default function Item({ name, quantity, category }) {
  return (
    <li className="p-3 mb-2 border rounded-lg shadow-sm bg-white flex justify-between items-center">
      <div>
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-sm text-gray-500">Category: {category}</p>
      </div>
      <span className="text-blue-600 font-bold">x{quantity}</span>
    </li>
  );
}
