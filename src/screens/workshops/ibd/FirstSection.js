import {
  Box,
  Image,
  Text,
  Stack,
  HStack,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ApplyCard from "./ApplyCard";

// import components
import ProfileCard from "../../../components/Workshop/ProfileCard";

export default function FirstSection() {
  return (
    <Stack
      spacing={{ sm: 10, md: 20, xl: 40 }}
      justifyContent="space-between"
      direction={{ sm: "column", lg: "row" }}
    >
      <Box>
        <motion.main
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          {/** ABOUT VITA */}
          <Box mb={20}>
            {/* text */}
            <Text fontSize="2rem" fontWeight="bold" my={10}>
              About IBD Workshop
            </Text>
            <Text fontSize="1.2rem">
              IBD Workshop consists of a 12-week training program focused on
              learning corporate finance, industry and company analysis,
              accounting, and valuation. Members will also receive tips and
              advice from upperclassmen to improve on their behavioral answers,
              resumes, and technical training. We also aim to form a strong
              social community to foster long-lasting friendships and
              connections.
            </Text>
          </Box>

          {/** Chairs Information */}
          <Box>
            <Text fontSize="2rem" fontWeight="bold" my={10}>
              Workshop Chairs
            </Text>
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={20}>
              <ProfileCard
                src="/ibd/neil.png"
                name={"Neil Sarkar"}
                bio={
                  "Neil is a junior studying Finance and Data Science at Stern. He was born in Denver, CO, and grew up in New York City. He enjoys playing basketball and solving crossword puzzles."
                }
              />
              <ProfileCard
                src="/ibd/arjun.png"
                name={"Arjun Kubal"}
                bio={
                  "Arjun is a junior studying Finance and Statistics at Stern. He is from Carmel, IN, and is enthusiastic about hiking. Arjun also enjoys camping, kayaking, and other hiking-related activities."
                }
              />
            </SimpleGrid>
          </Box>
        </motion.main>
      </Box>

      {/* description */}
      <motion.main
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        {/* Add title when small screen */}
        <Box display={{ sm: "block", md: "none" }}>
          <Text fontSize="2rem" fontWeight="bold" my={10}>
            Application
          </Text>
        </Box>
        <ApplyCard />
      </motion.main>
    </Stack>
  );
}
