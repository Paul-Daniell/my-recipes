import { Center, Grid, Heading, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { data } from "../utils/data";
import { Recipe } from "../components/Recipe";
import { SearchBar } from "../components/SearchBar";

export const Recipes = () => {
  // Define a greeting message
  const greeting = "Welcome to my Recipe Finder!";

  // Initialize the recipes state with data.hits
  const [recipes, setRecipes] = useState(data.hits);

  return (
    // Center the content with Chakra UI's Center component
    <Center
      marginLeft="20px"
      marginRight="20px"
      h="100%"
      flexDir="column"
      gap="50"
    >
      <>
        {/* Display the greeting message */}
        <Heading>{greeting}</Heading>
        {/* Pass the setRecipes and recipes state to the SearchBar component */}
        <SearchBar setRecipes={setRecipes} recipes={recipes} />
        {/* Display a grid of Recipe components */}
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {recipes.map((recipe) => (
            <Recipe
              // Pass the recipe properties as props to the Recipe component
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
