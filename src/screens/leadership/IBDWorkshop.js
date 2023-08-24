import { Box, Text, SimpleGrid, VStack, Stack } from "@chakra-ui/react";
import { LuPiggyBank } from "react-icons/lu";

// import components
import ProfileCard from "../../components/Leadership/ProfileCard";

export default function IBDWorkshop() {
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
          <LuPiggyBank fontSize="3rem" color="gray" />
          <Text fontSize="2rem" fontWeight="bold">
            IBD Workshop
          </Text>
          <Text fontSize="1.2rem">
            The IBD Workshop Committee is responsible for something that is very
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
          <ProfileCard name="Neil Sarkar" position="Co-Chair" />
          <ProfileCard name="Arjun Kubal" position="Co-Chair" />
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
