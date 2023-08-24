import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

// import components
import NavbarSpacer from "../../components/Navbar/NavbarSpacer";

export default function Events() {
  return (
    <Box height="100%" marginTop={-150}>
      <Box
        width="100%"
        height="55vh"
        backgroundImage="/wallpapers/leadership.png"
        backgroundSize="cover"
      >
        <motion.main
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
        >
          <Box px={{ base: 5, lg: 20, xl: 40 }} pt={3}>
            <NavbarSpacer />

            {/* title box and description */}
            <Box>
              <Text fontSize="4em" color="white" fontWeight="bold">
                Events
              </Text>
              <Text fontSize="2em" color="white" fontWeight="medium">
                Fall 2023 Calendar
              </Text>
            </Box>
          </Box>
        </motion.main>
      </Box>

      <Box p={{ base: 5, lg: 20 }}>
        <motion.main
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          {/* Description */}
          <Box>
            <Text fontSize="2rem" fontWeight="bold" my={10}>
              Stay in the Loop
            </Text>
            <Text fontSize="1.5rem">
              Add our events to your personal Google Calendar to keep track of
              all our events. We update our calendar frequently.
            </Text>
          </Box>
        </motion.main>
      </Box>
    </Box>
  );
}
