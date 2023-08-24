import { Box, Text, SimpleGrid, VStack, Stack } from "@chakra-ui/react";
import { LuFlame } from "react-icons/lu";

// import components
import ProfileCard from "../../components/Leadership/ProfileCard";

export default function Marketing() {
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
          mt={3}
        >
          <LuFlame fontSize="3rem" color="gray" />
          <Text fontSize="2rem" fontWeight="bold">
            Marketing
          </Text>
          <Text fontSize="1.2rem">
            The Marketing Committee is responsible for something that is very
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
          <ProfileCard name="Raymond Mo" position="Chair" />
          <ProfileCard name="Sarah Naanaa" position="Committee Member" />
          <ProfileCard name="Laura Zhao" position="Committee Member" />
          <ProfileCard
            name="Proud Likitpurkpaisan"
            position="Committee Member"
          />
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
