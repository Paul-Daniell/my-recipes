import { React } from "react";
import { Box, Heading, Image, Text, Badge } from "@chakra-ui/react";
import { FilteredData } from "./ui/FilteredData";

export const Recipe = ({
  title,
  mealType,
  image,
  dishType,
  dietLabels,
  cautions,
}) => {
  return (
    <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt="" width="500px" height="350px"></Image>
      <Box p="6">
        <Box display="flex" flexDir="column" alignItems="baseline">
          <Heading size="md">{title}</Heading>
          <Badge borderRadius="full" px="2" colorScheme="orange">
            <Text>{mealType}</Text>
          </Badge>
          <Text>{dishType}</Text>
          <Text>{dietLabels}</Text>
          <Text>{cautions}</Text>
        </Box>
      </Box>
    </Box>
  );
};
