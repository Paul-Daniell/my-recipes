import { Center, Grid, Heading, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { data } from "../utils/data";
import { Recipe } from "../components/Recipe";
import { SearchBar } from "../components/SearchBar";

export const Recipes = () => {
  // Define a greeting message
  const greeting = "Welcome to my Recipe Finder!";

  // Initialize the recipes state with data.hits and selected recipe state as null
  const [recipes, setRecipes] = useState(data.hits);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Define a function to update the selected recipe when a user clicks on a recipe
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Define a function to reset the selected recipe state to null
  const resetSelectedRecipe = () => {
    setSelectedRecipe(null);
  };

  return (
    // Center the content with Chakra UI's Center component
    <Center marginLeft="20px" marginRight="20px" flexDir="column" gap="50">
      <>
        {/* Display the greeting message */}
        <Heading marginTop="100px">{greeting}</Heading>
        {/* Pass the setRecipes and recipes state to the SearchBar component */}
        <SearchBar setRecipes={setRecipes} recipes={recipes} />
        {/* Conditionally display either the Recipe or Recipes component based on the selectedRecipe state */}
        {selectedRecipe ? (
          <Recipe
            // Pass the selected recipe properties as props to the Recipe component
            key={selectedRecipe.url}
            image={selectedRecipe.image}
            title={selectedRecipe.label}
            healthLabels={selectedRecipe.healthLabels
              .filter((label) => label === "Vegetarian" || label === "Vegan")
              .join(" | ")}
            mealType={selectedRecipe.mealType}
            dishType={selectedRecipe.dishType}
            dietLabels={selectedRecipe.dietLabels.join(" | ")}
            cautions={selectedRecipe.cautions.join(" | ")}
            onClose={resetSelectedRecipe}
          />
        ) : (
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {recipes.map((recipe) => (
              <Button
                marginTop="300px"
                backgroundColor="white"
                _hover={{
                  backgroundColor: "white",
                }}
                onClick={() => handleRecipeClick(recipe)}
              >
                <Recipe
                  // Pass the recipe properties as props to the Recipe component
                  key={recipe.recipe.url}
                  image={recipe.recipe.image}
                  title={recipe.recipe.label}
                  healthLabels={recipe.recipe.healthLabels
                    .filter(
                      (label) => label === "Vegetarian" || label === "Vegan"
                    )
                    .join(" | ")}
                  mealType={recipe.recipe.mealType}
                  dishType={recipe.recipe.dishType}
                  dietLabels={recipe.recipe.dietLabels.join(" | ")}
                  cautions={recipe.recipe.cautions.join(" | ")}
                />
              </Button>
            ))}
          </Grid>
        )}
      </>
    </Center>
  );
};
