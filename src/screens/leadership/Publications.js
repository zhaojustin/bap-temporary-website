import { Box, Text, SimpleGrid, VStack, Stack } from "@chakra-ui/react";
import { LuNewspaper } from "react-icons/lu";

// import components
import ProfileCard from "../../components/Leadership/ProfileCard";

export default function Publications() {
  return (
    <Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        {/* Description */}
        <VStack
          width={{ base: "100%", md: "25%" }}
          alignItems="left"
          gap={5}
          mt={5}
        >
          <LuNewspaper fontSize="3rem" color="gray" />
          <Text fontSize="2rem" fontWeight="bold">
            Publications
          </Text>
          <Text fontSize="1.2rem">
            The Publications Committee is responsible for something that is very
            important and I need to change this text please thanks I dont know
            what to write.
          </Text>
        </VStack>

        {/* Photo Cards */}
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          width={{ base: "100%", md: "70%" }}
          gap={10}
        >
          <ProfileCard name="Sam Nemoto" position="Chair" />
          <ProfileCard name="Atharv Shelar" position="Committee Member" />
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
