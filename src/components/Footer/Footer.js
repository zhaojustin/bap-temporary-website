import { Box, Stack, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { LuFacebook, LuInstagram } from "react-icons/lu";
import { Link } from "react-router-dom";

// import components

export default function Footer() {
  return (
    <>
      <VStack mb={3}>
        <VStack
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          _hover={{
            cursor: "pointer",
            bg: "brand.300",
            color: "white",
            transition: "0.2s ease-in-out",
          }}
          width={150}
          p={3}
          borderRadius={25}
        >
          <ArrowUpIcon />
          <Text fontWeight="bold">Back to Top</Text>
        </VStack>
      </VStack>
      <Box width="100%" bg="gray.300">
        <Box p={{ base: 10, lg: 20 }}>
          {/* gradient texts -- only show on big screens */}
          <Stack
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            display={{ base: "none", lg: "flex" }}
          >
            <Box>
              <Text
                bgGradient="linear(to-r, #AF272F, 85%, #C5C19D)"
                bgClip="text"
                fontSize="5xl"
                fontWeight={900}
              >
                beta alpha psi
              </Text>
            </Box>

            <Box>
              <Text
                bgGradient="linear(to-l, #8900e1, #57068c)"
                bgClip="text"
                fontSize="5xl"
                fontWeight={900}
              >
                mu chapter @ nyu
              </Text>
            </Box>
          </Stack>

          {/* Footer Links */}
          <Stack
            mt={5}
            direction={{ base: "column", lg: "row" }}
            justifyContent="space-between"
            gap={10}
          >
            <Stack
              gap={5}
              direction={{ base: "column", lg: "row" }}
              alignItems="center"
            >
              <Text
                fontWeight="semibold"
                fontSize="1.2rem"
                as={Link}
                to="/"
                color="GrayText"
                _hover={{ color: "black", transition: "0.2s ease-in" }}
              >
                About
              </Text>
              <Text
                fontWeight="semibold"
                fontSize="1.2rem"
                as={Link}
                to="/events"
                color="GrayText"
                _hover={{ color: "black", transition: "0.2s ease-in" }}
              >
                Events
              </Text>
              <Text
                fontWeight="semibold"
                fontSize="1.2rem"
                as={Link}
                to="/ibd"
                color="GrayText"
                _hover={{ color: "black", transition: "0.2s ease-in" }}
              >
                IBD Workshop
              </Text>
              <Text
                fontWeight="semibold"
                fontSize="1.2rem"
                as={Link}
                to="/consulting"
                color="GrayText"
                _hover={{ color: "black", transition: "0.2s ease-in" }}
              >
                Consulting Workshop
              </Text>
              <Text
                fontWeight="semibold"
                fontSize="1.2rem"
                as={Link}
                to="/leadership"
                color="GrayText"
                _hover={{ color: "black", transition: "0.2s ease-in" }}
              >
                Leadership
              </Text>
              <Text
                fontWeight="semibold"
                fontSize="1.2rem"
                as={Link}
                to="/vita"
                color="GrayText"
                _hover={{ color: "black", transition: "0.2s ease-in" }}
              >
                VITA
              </Text>
              <Text
                fontWeight="semibold"
                fontSize="1.2rem"
                as={Link}
                to="/join"
                color="GrayText"
                _hover={{ color: "black", transition: "0.2s ease-in" }}
              >
                Get Involved
              </Text>
            </Stack>

            {/* Divider */}
            <Box display={{ base: "flex", lg: "none" }}>
              <Divider orientation="horizontal" />
            </Box>

            {/* Contact Us */}
            <VStack>
              <HStack gap={5}>
                {/* Instagram */}
                <HStack
                  fontSize="1.5rem"
                  color="GrayText"
                  _hover={{
                    color: "black",
                    transition: "0.2s ease-in",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    window.location.href = "https://instagram.com/bapnyu";
                  }}
                  alignItems="center"
                >
                  <LuInstagram />
                  <Text fontSize="1.2rem">bapnyu</Text>
                </HStack>

                {/* Facebook */}
                <HStack
                  fontSize="1.5rem"
                  color="GrayText"
                  _hover={{
                    color: "black",
                    transition: "0.2s ease-in",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    window.location.href = "https://www.facebook.com/bapnyu";
                  }}
                  alignItems="center"
                >
                  <LuFacebook />
                  <Text fontSize="1.2rem">bapnyu</Text>
                </HStack>
              </HStack>
            </VStack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
