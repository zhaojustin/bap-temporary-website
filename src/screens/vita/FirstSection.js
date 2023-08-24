import { Box, Image, Text, Stack, HStack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

// import components
import ScheduleCard from "./ScheduleCard";

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
            {/* logo images */}
            <HStack spacing={10}>
              {/** VITA logo 2*/}
              <Image
                src="/vita/VITA2.png"
                alt="BAP Landing"
                borderRadius={5}
                width={200}
              />
              {/** VITA logo */}
              <Image
                src="/vita/VITA.png"
                alt="BAP Landing"
                borderRadius={5}
                width={200}
              />
            </HStack>

            {/* text */}
            <Text fontSize="2rem" fontWeight="bold" my={10}>
              About VITA
            </Text>
            <Text fontSize="1.2rem">
              VITA (Volunteer Income Tax Assistance) is a program that allows
              IRS-certified volunteers to provide free basic income tax return
              preparation for low-income individuals. Low-income individuals are
              those who make approximately $57,000 or less annually.
            </Text>
          </Box>

          {/** Contact Information */}
          <Box>
            {/* text */}
            <Text fontSize="2rem" fontWeight="bold" my={10}>
              Contact Us
            </Text>
            <Text fontSize="1.2rem" fontWeight="regular" mb={5}>
              Emails are strongly preferred, and we will respond as soon as we
              can.
            </Text>
            <Text fontSize="1.2rem" fontWeight="regular">
              <strong>Phone Number</strong>: (914)-481-2664
            </Text>
            <Text fontSize="1.2rem" fontWeight="regular">
              <strong>Email</strong>:{" "}
              <Link
                color="blue.600"
                href="mailto:bap.vita.committee@gmail.com"
                _hover={{ textDecoration: "none" }}
              >
                bap.vita.committee@gmail.com
              </Link>
            </Text>
          </Box>
        </motion.main>
      </Box>

      {/* description */}
      <motion.main
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        <ScheduleCard />
      </motion.main>
    </Stack>
  );
}
