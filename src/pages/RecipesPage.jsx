import { Center, Grid, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { data } from "../utils/data";
import { Recipe } from "../components/Recipe";
import { FilteredData } from "../components/ui/FilteredData";

export const Recipes = () => {
  const greeting = "Welcome to my Recipe Finder!";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data.hits);
  }, []);

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

        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {recipes.map((recipe) => (
            <Recipe
              image={recipe.recipe.image}
              title={recipe.recipe.label}
              mealType={recipe.recipe.mealType}
              dishType={recipe.recipe.dishType}
              dietLabels={recipe.recipe.dietLabels}
              cautions={recipe.recipe.cautions}
              healthLabels={recipe.recipe.healthLabels}
            />
          ))}
        </Grid>
      </>
    </Center>
  );
};
