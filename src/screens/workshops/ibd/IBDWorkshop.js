import { Box, Text, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

// import components
import NavbarSpacer from "../../../components/Navbar/NavbarSpacer";
import FirstSection from "./FirstSection";
import PreviousClasses from "./PreviousClasses";
import IBDCompanyMarquee from "../../../components/Workshop/IBDCompanyMarquee";

export default function IBDWorkshop() {
  return (
    <Box height="100%" marginTop={-150}>
      <Box
        width="100%"
        height="55vh"
        backgroundImage="/wallpapers/ibd.png"
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
                IBD Workshop
              </Text>
              <Text fontSize="2em" color="white" fontWeight="medium">
                Semester Long Mentorship Program for Investment Banking
              </Text>
            </Box>
          </Box>
        </motion.main>
      </Box>

      <Box p={{ base: 10, lg: 20 }}>
        <FirstSection />
      </Box>

      <Box p={{ base: 10, lg: 20 }}>
        <IBDCompanyMarquee
          title={"IBD Workshop Alumni Companies"}
          description={
            "A non exhaustive list of where past IBD Workshop Alumni have gone on to work at."
          }
          companiesCount={19}
        />
      </Box>

      <Box p={{ base: 10, lg: 20 }}>
        <PreviousClasses />
      </Box>
    </Box>
  );
}
