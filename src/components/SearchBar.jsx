import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const SearchBar = ({ setRecipes, recipes }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [originalRecipes, setOriginalRecipes] = useState([]);

  useEffect(() => {
    setOriginalRecipes([...recipes]);
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    if (event.target.value === "") {
      setRecipes(originalRecipes);
    } else {
      const filtered = originalRecipes.filter((recipe) => {
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
    }
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
