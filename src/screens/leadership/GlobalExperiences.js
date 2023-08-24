import { Box, Text, SimpleGrid, VStack, Stack } from "@chakra-ui/react";
import { LuGlobe2 } from "react-icons/lu";

// import components
import ProfileCard from "../../components/Leadership/ProfileCard";

export default function GlobalExperiences() {
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
          <LuGlobe2 fontSize="3rem" color="gray" />
          <Text fontSize="2rem" fontWeight="bold">
            Global Experiences
          </Text>
          <Text fontSize="1.2rem">
            The Global Experiences Committee is responsible for something that
            is very important and I need to change this text please thanks I
            dont know what to write.
          </Text>
        </VStack>

        {/* Photo Cards */}
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          width={{ base: "100%", md: "70%" }}
          gap={10}
        >
          <ProfileCard name="Sameer Paila" position="Chair" />
          <ProfileCard name="Bianca Xie" position="Committee Member" />
          <ProfileCard name="Nicole Wang" position="Committee Member" />
          <ProfileCard name="Ian Chen" position="Committee Member" />
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
