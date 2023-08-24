import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

// import components

export default function Landing() {
  return (
    <Box>
      {/* Words */}
      <motion.main
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        <Center mb={10}>
          <Text
            color="whiteAlpha.800"
            fontFamily="mories"
            fontSize={{ base: "3rem", lg: "4rem" }}
          >
            Dare to Dream
          </Text>
        </Center>
      </motion.main>

      {/* Phoenix */}
      <motion.main
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: [0.6, -0.05, 0.01, 0.99], delay: 1 }}
      >
        <Center mt={10}>
          <VStack>
            <Image maxH={200} w="auto" src="/rush/bap_phoenix.png" />

            <Box mt={10}>
              <Text
                color="whiteAlpha.800"
                fontFamily="mories"
                fontSize={"2rem"}
              >
                Beta Alpha Psi
              </Text>

              <Text
                textAlign="center"
                color="whiteAlpha.800"
                fontFamily="mories"
                fontSize={"2rem"}
              >
                Fall{" "}
                <Text
                  textAlign="center"
                  display="inline"
                  color="whiteAlpha.800"
                  fontFamily="moriesDisplay"
                  fontSize={"2rem"}
                >
                  2023
                </Text>
              </Text>
            </Box>
          </VStack>
        </Center>
      </motion.main>
    </Box>
  );
}
