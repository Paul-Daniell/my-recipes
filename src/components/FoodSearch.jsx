import { FormLabel } from "@chakra-ui/react";
import { useState } from "react";
import { Recipe } from "./Recipe";
import { TextInput } from "./ui/TextInput";

export const FoodSearch = () => {
  const [searchField, setSearchField] = useState("test recipe");

  const getRecipes = hits.filter((food) => {
    return food.label.toLowerCase().includes(searchField.toLocaleLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <FormLabel as="legend">Search for Recipes:</FormLabel>
      <TextInput onChange={handleChange} w={200} mb={8} />
      <p>{searchField}</p>
    </>
  );
};
