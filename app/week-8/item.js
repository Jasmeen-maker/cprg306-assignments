export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      style={{
        cursor: "pointer",
        border: "1px solid #ddd",
        padding: "8px",
        margin: "4px 0",
        borderRadius: "8px",
      }}
    >
      <strong>{name}</strong> — {quantity} ({category})
    </li>
  );
}
