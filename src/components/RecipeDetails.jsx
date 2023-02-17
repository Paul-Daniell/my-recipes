import { React } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Badge,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { data } from "../utils/data";

// Recipe component to display a single recipe
// Props:
// - title: string (required)
// - mealType: string (required)
// - image: string (required)
// - dishType: string (required)
// - dietLabels: string (required)
// - cautions: string (required)
// - healthLabels: string (required)

export const RecipeDetails = ({
  title,
  mealType,
  image,
  dishType,
  dietLabels,
  cautions,
  healthLabels,
  ingredientLines,
  totalTime,
  Yield,
}) => {
  // Return the Recipe component with image, title, meal type, health labels, dish type, diet labels and cautions
  return (
    <Box borderWidth="1px" borderRadius="lg" width="1000px">
      <Grid
        gridTemplateRows="repeat(4, 1fr) 300px, 50px, auto"
        gridTemplateColumns="repeat(2, 1fr)"
        gap={5}
      >
        <GridItem rowSpan={1}>
          <Image
            src={image}
            alt=""
            width="600px"
            height="200px"
            borderTopLeftRadius={4}
          ></Image>
        </GridItem>
        <GridItem>
          <Box display="flex" flexDir="column" gap={2}>
            <Heading size="md">{title}</Heading>
            <Badge borderRadius="4" px="2" colorScheme="orange">
              {mealType}
            </Badge>
            <Badge borderRadius="4" px="2" colorScheme="yellow">
              {dishType}
            </Badge>
            <Badge borderRadius="4" px="2" colorScheme="pink">
              {dietLabels}
            </Badge>
            <Badge borderRadius="4" px="2" colorScheme="red">
              Cautions: {cautions}
            </Badge>
            <Badge borderRadius="4" px="2" colorScheme="whatsapp">
              Total coocking time: {totalTime} minutes
            </Badge>
            <Badge borderRadius="4" px="2" colorScheme="facebook">
              Servings: {Yield}
            </Badge>
          </Box>
        </GridItem>
        <GridItem rowSpan={1} width="400px" px="2">
          <Badge borderRadius="4" px="2" colorScheme="green">
            <Text fontSize="lg" fontWeight={500}>
              Health Labels:
            </Text>
          </Badge>
        </GridItem>
        <GridItem rowSpan={1} width="400px" px="2">
          <Badge borderRadius="4" px="2" colorScheme="linkedin">
            <Text fontSize="lg" fontWeight={500}>
              Ingredients:
            </Text>
          </Badge>
        </GridItem>
        <Box borderBottomLeftRadius={4} bg="#C6F6D5">
          <GridItem rowSpan={1} width="400px" px="2">
            <Text>{healthLabels}</Text>
          </GridItem>
        </Box>
        <Box>
          <GridItem rowSpan={1} width="400px" px="2">
            <Text>{ingredientLines}</Text>
          </GridItem>
        </Box>
      </Grid>
    </Box>
  );
};
