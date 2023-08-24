import { Box, Text, SimpleGrid, VStack, Stack } from "@chakra-ui/react";
import { LuRocket } from "react-icons/lu";

// import components
import ProfileCard from "../../components/Leadership/ProfileCard";

export default function Eboard() {
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
          <LuRocket fontSize="3rem" color="gray" />
          <Text fontSize="2rem" fontWeight="bold">
            E-Board
          </Text>
          <Text fontSize="1.2rem">
            The Eboard is responsible for something that is very important and I
            need to change this text please thanks I dont know what to write.
          </Text>
        </VStack>

        {/* Photo Cards */}
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          width={{ base: "100%", md: "70%" }}
          gap={10}
        >
          <ProfileCard name="Henry Liu" position="President" />
          <ProfileCard name="Manda You" position="Vice President" />
          <ProfileCard name="Andrea Kangmasto" position="Treasurer" />
          <ProfileCard name="Ariel Tsou" position="Director of Reporting" />
          <ProfileCard name="Sarah Qiu" position="Director of Correspondence" />
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
