"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import itemsdata from "./item.json";
export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9"); // redirect to login
    }
  }, [user, router]);

  if (!user) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Your Shopping List</h1>
      <p>This is your protected shopping list page.</p>
      {/* You can add your shopping list UI here */}
    </div>
  );
}
