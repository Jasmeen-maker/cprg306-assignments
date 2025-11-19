"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const ideas = await fetchMealIdeas(ingredient);
    setMeals(ideas);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">
        Meal ideas for: {ingredient || "—"}
      </h2>

      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} className="mb-2">
            {meal.strMeal}
          </li>
        ))}

        {meals.length === 0 && (
          <p className="text-gray-500">No ideas yet. Select an ingredient.</p>
        )}
      </ul>
    </div>
  );
}
