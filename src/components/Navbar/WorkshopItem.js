import {
  Box,
  VStack,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function WorkshopItem({ activeTab }) {
  return (
    <Box p={0} mx={-2}>
      <Popover trigger="hover" placement="bottom-start">
        <PopoverTrigger>
          <Text
            fontSize="large"
            color={activeTab == "workshops" ? "white" : "white.secondary"}
            fontWeight="bold"
            as={Button}
            bg="rgba(0,0,0,0)"
            _hover={{ bg: "rgba(0,0,0,0)", color: "white" }}
            alignItems="center"
          >
            Workshops
          </Text>
        </PopoverTrigger>

        <PopoverContent
          bg="white"
          border={0}
          borderRadius={10}
          width={380}
          p={1}
        >
          <PopoverArrow bg="white" />
          <PopoverBody p={1}>
            {/* IBD Workshop */}
            <VStack
              alignItems="left"
              transition="0.2s"
              _hover={{
                bg: "brand.50",
                color: "brand.500",
                cursor: "pointer",
              }}
              borderRadius={10}
              p={4}
            >
              <Text
                fontWeight="bold"
                fontSize={18}
                as={Link}
                to="/ibd"
                transition="0.1s"
                color="inherit"
              >
                IBD Workshop
              </Text>
              <Text
                fontWeight="regular"
                fontSize={16}
                as={Link}
                to="/ibd"
                transition="0.1s"
                color="inherit"
              >
                Semester Long Mentorship Program for Investment Banking
              </Text>
            </VStack>

            {/* Consulting Workshop */}
            <VStack
              alignItems="left"
              transition="0.1s"
              _hover={{
                bg: "brand.50",
                color: "brand.500",
                cursor: "pointer",
              }}
              borderRadius={10}
              p={4}
            >
              <Text
                fontWeight="bold"
                fontSize={18}
                as={Link}
                to="/ibd"
                transition="0.1s"
                color="inherit"
              >
                Consulting Workshop
              </Text>
              <Text
                fontWeight="regular"
                fontSize={16}
                as={Link}
                to="/ibd"
                transition="0.1s"
                color="inherit"
              >
                Semester Long Mentorship Program for Consulting
              </Text>
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}
