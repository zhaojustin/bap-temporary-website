import { Box, SimpleGrid, Image, Text, VStack } from "@chakra-ui/react";
import { LuRocket, LuHeartHandshake } from "react-icons/lu";

export default function FirstSection() {
  return (
    <Box>
      {/** BAP */}
      <SimpleGrid
        columns={{ sm: 1, xl: 2 }}
        spacing={{ sm: 0, md: 5, lg: 20 }}
        alignItems="center"
      >
        {/** BAP Image */}
        <Image src="/about/aboutbap.jpeg" alt="BAP Landing" borderRadius={5} />

        <VStack alignItems="left" spacing={5}>
          <Text fontSize="2rem" fontWeight="bold" mt={{ base: 10, md: 0 }}>
            Beta Alpha Psi
          </Text>
          <Text fontSize="1.2rem">
            Founded in 1919, Beta Alpha Psi is an honor organization for
            financial information students and professionals. There are 300+
            chapters on college campuses with over 300,000 members initiated
            since Beta Alpha Psi's formation.
          </Text>
        </VStack>
      </SimpleGrid>

      {/** MU CHAPTER */}
      <SimpleGrid
        marginTop={40}
        columns={{ sm: 1, xl: 2 }}
        spacing={{ sm: 10, lg: 20 }}
        alignItems="center"
      >
        {/** BAP Image */}
        <Image src="/about/muchapter.jpeg" alt="BAP Landing" borderRadius={5} />

        <VStack alignItems="left" spacing={5}>
          <Text fontSize="2rem" fontWeight="bold">
            Mu Chapter
          </Text>
          <Text fontSize="1.2rem">
            Established in 1929, NYU Stern's Mu Chapter is the 12th Beta Alpha
            Psi chapter. As the largest student organization at Stern, we strive
            to foster a supportive community for all individuals. We are not a
            fraternity or sorority but an honors organization.
          </Text>
        </VStack>
      </SimpleGrid>

      {/** Purpose, Goal, Community */}
      <Box marginTop={40}>
        <VStack alignItems="left" spacing={5}>
          <Text fontSize="2rem" fontWeight="bold">
            Our Core Values
          </Text>
        </VStack>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          spacing={{ sm: 10, lg: 20 }}
          paddingTop={10}
        >
          {/** Purpose */}
          <VStack
            alignItems="left"
            spacing={5}
            borderRadius={5}
            p={{ base: 10, lg: 20 }}
            borderWidth={2}
            borderColor="brand.200"
            _hover={{
              transition: "0.2s ease-in",
              bg: "brand.400",
              color: "white",
              cursor: "pointer",
            }}
            _active={{
              transition: "0.1s ease-in",
              bg: "rgba(255,255,255,0)",
              borderWidth: 2,
              borderColor: "brand.200",
              color: "GrayText",
              borderRadius: 10,
            }}
          >
            <LuRocket fontSize="4rem" />
            <Text fontSize="2rem" fontWeight="semibold" marginTop={5}>
              We lead with{" "}
              <Text
                display="inline"
                color="brand.500 | white"
                fontWeight="bold"
              >
                Ambition
              </Text>
              .
            </Text>
            <Text fontSize="1.2rem">
              We believe in pushing ourselves to achieve excellence in
              everything that we do, from the classroom to beyond. We take
              ownership of our actions and outcomes.
            </Text>
          </VStack>

          {/** Goal */}
          <VStack
            alignItems="left"
            spacing={5}
            borderRadius={5}
            p={{ base: 10, lg: 20 }}
            borderWidth={2}
            borderColor="brand.200"
            _hover={{
              transition: "0.2s ease-in",
              bg: "brand.400",
              color: "white",
              cursor: "pointer",
            }}
            _active={{
              transition: "0.1s ease-in",
              bg: "rgba(255,255,255,0)",
              borderWidth: 2,
              borderColor: "brand.200",
              color: "GrayText",
              borderRadius: 10,
            }}
          >
            <LuHeartHandshake fontSize="4rem" />
            <Text fontSize="2rem" fontWeight="semibold" marginTop={5}>
              We act with{" "}
              <Text
                display="inline"
                color="brand.500 | white"
                fontWeight="bold"
              >
                Compassion
              </Text>
              .
            </Text>
            <Text fontSize="1.2rem">
              To us, this means uplifting one another through mentorship. We
              strive to make a positive impact by giving back to the greater
              community.
            </Text>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
