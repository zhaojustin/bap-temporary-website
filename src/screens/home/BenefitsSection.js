import { Box, SimpleGrid, Image, Text, VStack, HStack } from "@chakra-ui/react";
import {
  LuPartyPopper,
  LuNetwork,
  LuUsers,
  LuBookOpen,
  LuCheck,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import { useState } from "react";
import Confetti from "../../components/Confetti/Confetti";

export default function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false); // easter egg of clicking party popper

  return (
    <Box mt={0}>
      {/** Benefits */}
      <Box>
        <VStack alignItems="left" spacing={5}>
          <Text fontSize="2rem" fontWeight="bold">
            One Platform, Many Possibilities
          </Text>
        </VStack>

        {/** Beyond */}
        <SimpleGrid
          columns={{ sm: 1, xl: 2 }}
          spacing={{ sm: 0, md: 5, lg: 20 }}
          alignItems="center"
          mt={10}
        >
          {/** BAP Image */}
          <Image
            src="/about/goal.png"
            alt="One platform, Many possibilities"
            borderRadius={5}
          />

          <VStack alignItems="left" spacing={5}>
            <Text fontSize="1.5rem" fontWeight="bold" mt={{ base: 10, md: 0 }}>
              Beyond the Classroom
            </Text>
            <Text fontSize="1.2rem">
              Although BAP provides a great platform and support for your first
              steps into the working sphere, the organization offers so much
              more than just professional assistance.
            </Text>
          </VStack>
        </SimpleGrid>

        <SimpleGrid
          columns={{ sm: 1, lg: 2 }}
          spacing={5}
          gap={10}
          mt={{ base: 10, lg: 20 }}
        >
          {/** Community & Social Events */}
          <HStack alignItems="center" spacing={10}>
            <LuBookOpen fontSize="2.5rem" fontWeight="regular" />
            <Text fontSize="1.5rem" fontWeight="regular">
              Academic Assistance
            </Text>
          </HStack>
          {/** Community & Social Events */}
          <HStack
            alignItems="center"
            spacing={10}
            _hover={{ cursor: "pointer" }}
          >
            <LuPartyPopper
              fontSize="2.5rem"
              fontWeight="regular"
              onClick={() => setIsVisible(true)}
            />
            <Text fontSize="1.5rem" fontWeight="regular">
              Community & Social Events
            </Text>
          </HStack>
          {/** Community & Social Events */}
          <HStack alignItems="center" spacing={10}>
            <LuNetwork fontSize="2.5rem" fontWeight="regular" />
            <Text fontSize="1.5rem" fontWeight="regular">
              Extensive Alumni Network
            </Text>
          </HStack>
          {/** Big/Little Pairing */}
          <HStack alignItems="center" spacing={10}>
            <LuUsers fontSize="2.5rem" fontWeight="regular" />
            <Text fontSize="1.5rem" fontWeight="regular">
              Big/Little Pairing
            </Text>
          </HStack>
        </SimpleGrid>
      </Box>

      {/** Community */}
      <Box mt={40}>
        <VStack alignItems="left" spacing={5}>
          <Text fontSize="2rem" fontWeight="bold">
            Tight-knit Community
          </Text>
        </VStack>

        {/** Beyond */}
        <SimpleGrid
          columns={{ sm: 1, xl: 2 }}
          spacing={{ sm: 0, md: 5, lg: 20 }}
          alignItems="center"
          mt={10}
        >
          {/** BAP Image */}
          <Image src="/about/community.jpg" alt="community" borderRadius={5} />

          <VStack alignItems="left" spacing={5}>
            <Text fontSize="1.5rem" fontWeight="bold" mt={{ base: 10, md: 0 }}>
              Make Meaningful Relationships
            </Text>
            <Text fontSize="1.2rem">
              With a wide range of events throughout the semester, there’s no
              better place to find your community at Stern. Get to know your
              class, upperclassmen, and alumni with the range of social events
              every semester. Stay up to date with events{" "}
              <Text display="inline" color="blue.400" as={Link} to="/events">
                here
              </Text>
              .
            </Text>
            <VStack mt={5} alignItems="left">
              <HStack alignItems="center" spacing={5}>
                <LuCheck fontSize="2rem" fontWeight="regular" />
                <Text fontSize="1.2rem" fontWeight="regular">
                  Social outings on weekdays
                </Text>
                {isVisible && <Confetti />}
              </HStack>
              <HStack alignItems="center" spacing={5}>
                <LuCheck fontSize="2rem" fontWeight="regular" />
                <Text fontSize="1.2rem" fontWeight="regular">
                  Off-campus social outings
                </Text>
              </HStack>
              <HStack alignItems="center" spacing={5}>
                <LuCheck fontSize="2rem" fontWeight="regular" />
                <Text fontSize="1.2rem" fontWeight="regular">
                  Community service on weekends
                </Text>
              </HStack>
              <HStack alignItems="center" spacing={5}>
                <LuCheck fontSize="2rem" fontWeight="regular" />
                <Text fontSize="1.2rem" fontWeight="regular">
                  Semi-formal every semester
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
