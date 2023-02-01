import React, { useState, useEffect } from "react";
import { data } from "../../utils/data";

export const FilteredData = () => {
  const [recipes1, setRecipes1] = useState([]);

  useEffect(() => {
    const filteredData = data.hits.filter((hit) => {
      return (
        hit.recipe.healthLabels.includes("Vegetarian") ||
        hit.recipe.healthLabels.includes("Vegan")
      );
    });

    setRecipes1(filteredData);
  }, []);

  return (
    <ul>
      {recipes1.map((recipe) => (
        <li key={recipe.recipe.label}>{recipe.recipe.label}</li>
      ))}
    </ul>
  );
};
