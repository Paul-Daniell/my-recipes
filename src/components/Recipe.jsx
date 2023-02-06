import { React } from "react";
import { Box, Heading, Image, Text, Badge } from "@chakra-ui/react";

export const Recipe = ({
  title,
  mealType,
  image,
  dishType,
  dietLabels,
  cautions,
  healthLabels,
}) => {
  return (
    <Box
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      _hover={{
        shadow: "lg",
        transform: "translateY(-5px)",
      }}
    >
      <Image src={image} alt="" width="500px" height="350px"></Image>
      <Box p="6">
        <Box display="flex" flexDir="column" alignItems="baseline" gap={2}>
          <Heading size="md">{title}</Heading>
          <Badge borderRadius="4" px="2" colorScheme="orange">
            <Text>{mealType}</Text>
          </Badge>
          <Badge borderRadius="4" px="2" colorScheme="red">
            <Text>{healthLabels}</Text>
          </Badge>
          <Text>{dishType}</Text>
          <Text>{dietLabels}</Text>
          <Text>{cautions}</Text>
        </Box>
      </Box>
    </Box>
  );
};
