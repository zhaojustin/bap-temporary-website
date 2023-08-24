import { Box, Text, VStack, SimpleGrid, Link } from "@chakra-ui/react";
import ProfileCard from "../../components/Leadership/ProfileCard";

export default function Contact() {
  return (
    <Box>
      <VStack alignItems="left" spacing={5}>
        <Text fontSize="2rem" fontWeight="bold" mt={{ base: 5, md: 0 }}>
          Questions? Ask the CMs!
        </Text>
        <Text fontSize="1.2rem">
          Contact the Candidate Masters for any questions related to candidacy,
          crossing, and joining BAP.
        </Text>

        <Text fontSize="1.2rem" fontWeight="regular">
          <strong>Email</strong>:{" "}
          <Link
            color="blue.600"
            href="mailto:bap.candidatemaster@gmail.com"
            _hover={{ textDecoration: "none" }}
          >
            bap.candidatemaster@gmail.com
          </Link>
        </Text>

        {/* Photo Cards */}
        <SimpleGrid
          mt={5}
          columns={{ sm: 1, md: 2, lg: 4 }}
          p={{ base: 10, md: 0 }}
          width={{ base: "100%", md: "70%" }}
          gap={10}
        >
          <ProfileCard name="Yangyang Lai" position="CM" />
          <ProfileCard name="Tom Xu" position="CM" />
          <ProfileCard name="Dot Zhou" position="CM" />
          <ProfileCard name="Ryan Kuo" position="CM" />
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
