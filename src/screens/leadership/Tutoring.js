import { Box, Text, SimpleGrid, VStack, Stack } from "@chakra-ui/react";
import { LuBookOpen } from "react-icons/lu";

// import components
import ProfileCard from "../../components/Leadership/ProfileCard";

export default function Tutoring() {
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
          <LuBookOpen fontSize="3rem" color="gray" />
          <Text fontSize="2rem" fontWeight="bold">
            Tutoring
          </Text>
          <Text fontSize="1.2rem">
            The Tutoring Committee is responsible for creating this very
            website, supporting other committees with any tech-needs, and
            keeping the events calendar up to date.
          </Text>
        </VStack>

        {/* Photo Cards */}
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          width={{ base: "100%", md: "70%" }}
          gap={10}
        >
          <ProfileCard name="Samantha Krulik" position="Chair" />
          <ProfileCard name="Andrew Cheng" position="Committee Member" />
          <ProfileCard name="James Hu" position="Committee Member" />
          <ProfileCard name="Aarav Joshi" position="Committee Member" />
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
