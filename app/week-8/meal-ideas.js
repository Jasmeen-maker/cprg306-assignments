"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // API function to fetch meals based on ingredient
  async function fetchMealIdeas(ingredient) {
    if (!ingredient) return [];

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  }

  async function loadMealIdeas() {
    const mealResults = await fetchMealIdeas(ingredient);
    setMeals(mealResults);
  }

  // reload when ingredient changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div style={{ marginLeft: "2rem" }}>
      <h2>Meal Ideas {ingredient ? `for "${ingredient}"` : ""}</h2>
      {meals.length === 0 ? (
        <p>No meal ideas yet — select an ingredient.</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{ width: "100px", borderRadius: "8px" }}
              />
              <p>{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
