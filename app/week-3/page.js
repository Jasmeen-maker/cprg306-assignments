import ItemList from "./ItemList";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}