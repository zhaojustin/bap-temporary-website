import { HStack, VStack, Text, Button } from "@chakra-ui/react";
import AnimatedTitle from "./AnimatedTitle";
import { Link } from "react-router-dom";

export default function LandingParagraph() {
  return (
    <VStack
      w={{ base: "100%", md: "90%", lg: "80%" }}
      justifyContent="left"
      alignItems="left"
    >
      <AnimatedTitle text="Dare to Dream" />
      <Text
        fontSize={{ base: "1.5rem", xl: "2rem" }}
        color="white"
        fontWeight="bold"
      >
        Mu Chapter,{" "}
        <Text display="inline" fontStyle="italic" fontWeight="medium">
          New York University Stern School of Business
        </Text>
      </Text>
      <Text
        fontSize={{ base: "1rem", xl: "1.5rem" }}
        color="white"
        fontWeight="medium"
      >
        Celebrating success in the classroom and beyond.
      </Text>

      <HStack marginTop={5}>
        <Button
          variant="outline"
          color="white"
          width={150}
          bg="none"
          _hover={{
            bg: "brand.500",
            borderColor: "brand.500",
            transition: "0.5s",
          }}
          borderRadius={15}
          as={Link}
          to="/join"
          fontSize="xl"
          px="8"
          py="4"
        >
          Get Involved
        </Button>
      </HStack>
    </VStack>
  );
}

{
  /*

The Mu Chapter of Beta Alpha Psi is a finance and accounting honor society at
 New York University Stern School of Business celebrating success in the classroom and beyond.
*/
}
