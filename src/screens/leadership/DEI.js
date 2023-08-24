import { Box, Text, SimpleGrid, VStack, Stack } from "@chakra-ui/react";
import { LuPuzzle } from "react-icons/lu";

// import components
import ProfileCard from "../../components/Leadership/ProfileCard";

export default function DEI() {
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
          <LuPuzzle fontSize="3rem" color="gray" />
          <Text fontSize="2rem" fontWeight="bold">
            DEI
          </Text>
          <Text fontSize="1.2rem">
            The DEI Committee is responsible for something that is very
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
          <ProfileCard name="Sriya Chekuri" position="Co-Chair" />
          <ProfileCard name="Clea Loci" position="Co-Chair" />
          <ProfileCard name="Ashley Ruth" position="Committee Member" />
          <ProfileCard name="Amy Xue" position="Committee Member" />
          <ProfileCard name="Ashna Mehta" position="Committee Member" />
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
