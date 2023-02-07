import { Center, Grid, Heading, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { data } from "../utils/data";
import { Recipe } from "../components/Recipe";
import { SearchBar } from "../components/SearchBar";

export const Recipes = () => {
  const greeting = "Welcome to my Recipe Finder!";

  const [recipes, setRecipes] = useState(data.hits);

  return (
    <Center
      marginLeft="20px"
      marginRight="20px"
      h="100%"
      flexDir="column"
      gap="50"
    >
      <>
        <Heading>{greeting}</Heading>
        <SearchBar setRecipes={setRecipes} recipes={recipes} />
        {/* ... */}
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {recipes.map((recipe) => (
            <Recipe
              image={recipe.recipe.image}
              title={recipe.recipe.label}
              healthLabels={recipe.recipe.healthLabels
                .filter((label) => label === "Vegetarian" || label === "Vegan")
                .join(" | ")}
              mealType={recipe.recipe.mealType}
              dishType={recipe.recipe.dishType}
              dietLabels={recipe.recipe.dietLabels.join(" | ")}
              cautions={recipe.recipe.cautions.join(" | ")}
            />
          ))}
        </Grid>
      </>
    </Center>
  );
};
