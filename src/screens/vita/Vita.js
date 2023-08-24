import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

// import components
import NavbarSpacer from "../../components/Navbar/NavbarSpacer";
import FirstSection from "./FirstSection";

export default function Vita() {
  return (
    <Box height="100%" marginTop={-150}>
      <Box
        width="100%"
        height="55vh"
        backgroundImage="/wallpapers/vita.jpg"
        backgroundSize="cover"
      >
        <motion.main
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <Box px={{ base: 5, lg: 20, xl: 40 }} pt={3}>
            <NavbarSpacer />

            {/* title box and description */}
            <Box>
              <Text fontSize="4em" color="white" fontWeight="bold">
                VITA
              </Text>
              <Text fontSize="2em" color="white" fontWeight="medium">
                Volunteer Income Tax Assistance
              </Text>
            </Box>
          </Box>
        </motion.main>
      </Box>

      {/* first section */}
      <Box p={{ base: 5, lg: 20 }}>
        <FirstSection />
      </Box>
    </Box>
  );
}
