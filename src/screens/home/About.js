import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

// import components
import LandingParagraph from "../../components/Home/LandingParagraph";
import NavbarSpacer from "../../components/Navbar/NavbarSpacer";
import FirstSection from "./FirstSection";
import BenefitsSection from "./BenefitsSection";

export default function About() {
  return (
    <Box height="100%" marginTop={-150}>
      <Box
        width="100%"
        height="95vh"
        backgroundImage="/wallpapers/about.jpg"
        backgroundSize="cover"
      >
        <motion.main
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <Box px={{ base: 5, lg: 20, xl: 40 }} pt={3}>
            <NavbarSpacer />

            <LandingParagraph />
          </Box>
        </motion.main>
      </Box>

      {/* about section */}
      <Box px={{ base: 5, lg: 20, xl: 40 }} py={20}>
        <FirstSection />
      </Box>

      {/* benefits section */}
      <Box px={{ base: 5, lg: 20, xl: 40 }} py={20} mb={10}>
        <BenefitsSection />
      </Box>
    </Box>
  );
}
