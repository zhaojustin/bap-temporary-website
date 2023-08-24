import { Box, Text, VStack, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";

// import components
import NavbarSpacer from "../../components/Navbar/NavbarSpacer";

import Eboard from "./Eboard";
import CandidateMasters from "./CandidateMasters";
import CommunityService from "./CommunityService";
import IBDWorkshop from "./IBDWorkshop";
import Marketing from "./Marketing";
import GlobalExperiences from "./GlobalExperiences";
import ConsultingWorkshop from "./ConsultingWorkshop";
import DEI from "./DEI";
import Mentoring from "./Mentoring";
import Publications from "./Publications";
import Social from "./Social";
import Special from "./Special";
import Tech from "./Tech";
import Tutoring from "./Tutoring";
import VITA from "./VITA";
import Workshop from "./Workshop";

export default function Leadership() {
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
          transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <Box px={{ base: 5, lg: 20, xl: 40 }} pt={3}>
            <NavbarSpacer />

            {/* title box and description */}
            <Box>
              <Text fontSize="4em" color="white" fontWeight="bold">
                Leadership
              </Text>
              <Text fontSize="2em" color="white" fontWeight="medium">
                Meet our 2023-2024 Leaders.
              </Text>
            </Box>
          </Box>
        </motion.main>
      </Box>

      <Box p={{ base: 10, lg: 20 }}>
        <motion.main
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <VStack gap={20}>
            <Eboard />
            <Divider orientation="horizontal" borderWidth={2} />
            <CandidateMasters />
            <Divider orientation="horizontal" borderWidth={2} />
            <Mentoring />
            <Divider orientation="horizontal" borderWidth={2} />
            <Tech />
            <Divider orientation="horizontal" borderWidth={2} />
            <Marketing />
            <Divider orientation="horizontal" borderWidth={2} />
            <Workshop />
            <Divider orientation="horizontal" borderWidth={2} />
            <CommunityService />
            <Divider orientation="horizontal" borderWidth={2} />
            <DEI />
            <Divider orientation="horizontal" borderWidth={2} />
            <IBDWorkshop />
            <Divider orientation="horizontal" borderWidth={2} />
            <ConsultingWorkshop />
            <Divider orientation="horizontal" borderWidth={2} />
            <Social />
            <Divider orientation="horizontal" borderWidth={2} />
            <GlobalExperiences />
            <Divider orientation="horizontal" borderWidth={2} />
            <Publications />
            <Divider orientation="horizontal" borderWidth={2} />
            <Tutoring />
            <Divider orientation="horizontal" borderWidth={2} />
            <Special />
            <Divider orientation="horizontal" borderWidth={2} />
            <VITA />
          </VStack>
        </motion.main>
      </Box>
    </Box>
  );
}
