import { Center, Text, VStack, SimpleGrid } from "@chakra-ui/react";

// pass in cohort as string, chairs as string[], members as string[]
export default function CohortCard({ cohort, chairs, members }) {
  return (
    <Center>
      <VStack
        alignItems="left"
        p={10}
        m={5}
        bg="gray.100"
        borderRadius={15}
        width={450}
        _hover={{
          transition: "0.2s ease-in",
          color: "white",
          bg: "brand.400",
        }}
      >
        <Text fontSize="1rem" color="grey | inherit">
          Cohort
        </Text>
        <Text fontSize="2rem" fontWeight="bold">
          {cohort}
        </Text>

        <Text fontSize="1rem" mt={5} color="grey | inherit">
          Chairs
        </Text>
        <VStack alignItems="left" spacing={0}>
          {chairs.map((person) => (
            <Text fontSize="1.2rem">{person}</Text>
          ))}
        </VStack>

        <Text fontSize="1rem" mt={5} color="grey | inherit">
          Members
        </Text>
        <SimpleGrid columns={2} spacingX={5}>
          {members.map((person) => (
            <Text fontSize="1.2rem">{person}</Text>
          ))}
        </SimpleGrid>
      </VStack>
    </Center>
  );
}
