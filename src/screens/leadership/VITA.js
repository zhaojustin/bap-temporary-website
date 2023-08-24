import { Box, Text, SimpleGrid, VStack, Stack } from "@chakra-ui/react";
import { LuSheet } from "react-icons/lu";

// import components
import ProfileCard from "../../components/Leadership/ProfileCard";

export default function VITA() {
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
          <LuSheet fontSize="3rem" color="gray" />
          <Text fontSize="2rem" fontWeight="bold">
            VITA
          </Text>
          <Text fontSize="1.2rem">
            The VITA Committee is responsible for creating this very website,
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
          <ProfileCard name="Jeff Su" position="Chair" />
          <ProfileCard name="Ishan Pranav" position="Committee Member" />
          <ProfileCard name="Grace Yan" position="Committee Member" />
          <ProfileCard name="JunYan Lu" position="Committee Member" />
          <ProfileCard name="David Huang" position="Committee Member" />
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
