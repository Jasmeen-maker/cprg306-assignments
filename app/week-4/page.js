// app/week-4/page.js
import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Week 4 - New Item</h1>
      <NewItem />
    </main>
  );
}
