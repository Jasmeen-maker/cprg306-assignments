import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
        Week 5 - New Item
      </h1>
      <NewItem />
    </main>
  );
}
