import { Box, Text, SimpleGrid, VStack, Stack } from "@chakra-ui/react";
import { LuBraces } from "react-icons/lu";

// import components
import ProfileCard from "../../components/Leadership/ProfileCard";

export default function Tech() {
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
          <LuBraces fontSize="3rem" color="gray" />
          <Text fontSize="2rem" fontWeight="bold">
            Tech
          </Text>
          <Text fontSize="1.2rem">
            The Tech Committee is responsible for creating this very website,
            supporting other committees with any tech-needs, and keeping the
            events calendar up to date.
          </Text>
        </VStack>

        {/* Photo Cards */}
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          width={{ base: "100%", md: "70%" }}
          gap={10}
        >
          <ProfileCard name="Justin Zhao" position="Chair" />
          <ProfileCard name="Carol Tsao" position="Committee Member" />
          <ProfileCard name="Alex Chen" position="Committee Member" />
          <ProfileCard name="Jessica Yu" position="Committee Member" />
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
