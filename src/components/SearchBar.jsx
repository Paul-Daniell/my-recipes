import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { data } from "../utils/data";

export const SearchBar = ({ setRecipes }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    const filtered = data.hits.filter((recipe) => {
      return (
        recipe.recipe.label
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        recipe.recipe.healthLabels.some((label) =>
          label.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    });
    setRecipes(filtered);
  };

  return (
    <FormControl width="400px" flexDir="column">
      <FormLabel htmlFor="search">Search Recipes</FormLabel>
      <Input
        border="2px solid orange"
        id="search"
        type="text"
        placeholder="Find your recipe here"
        value={searchTerm}
        onChange={handleChange}
      />
    </FormControl>
  );
};
