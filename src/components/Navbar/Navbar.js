import {
  Box,
  HStack,
  useDisclosure,
  Image,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  VStack,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import WorkshopItem from "./WorkshopItem";
import { Link } from "react-router-dom";

export default function Navbar({ activeTab }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        bg="rgba(0,0,0,0)"
        justifyContent="space-between"
        px={{ sm: 5, lg: 20 }}
        pt={5}
      >
        {/* BAP Logo */}
        <HStack as={Link} to="/" cursor="pointer">
          <Image src="/logo/BAP Logo.png" alt="BAP Logo" width={75} />
          <Text fontSize="2xl" color="white" fontWeight="black" marginLeft="3">
            BAP
          </Text>
          <Text fontSize="2xl" color="white" fontWeight="medium">
            NYU
          </Text>
        </HStack>

        {/* Navbar Links */}
        <Box display={{ base: "none", lg: "flex" }}>
          <HStack spacing={{ base: 5, xl: 12 }}>
            <Text
              fontSize="large"
              color={activeTab == "" ? "white" : "white.secondary"}
              fontWeight="bold"
              _hover={{
                color: "white",
                transition: "0.1s",
              }}
              as={Link}
              to="/"
            >
              About
            </Text>
            <Text
              fontSize="large"
              color={activeTab == "events" ? "white" : "white.secondary"}
              fontWeight="bold"
              _hover={{
                color: "white",
                transition: "0.1s",
              }}
              as={Link}
              to="/events"
            >
              Events
            </Text>

            {/* Workshop hover menu */}
            <WorkshopItem activeTab={activeTab} />

            <Text
              fontSize="large"
              color={activeTab == "leadership" ? "white" : "white.secondary"}
              fontWeight="bold"
              _hover={{
                color: "white",
                transition: "0.1s",
              }}
              as={Link}
              to="/leadership"
            >
              Leadership
            </Text>
            <Text
              fontSize="large"
              color={activeTab == "vita" ? "white" : "white.secondary"}
              fontWeight="bold"
              _hover={{
                color: "white",
                transition: "0.1s",
              }}
              as={Link}
              to="/vita"
            >
              VITA
            </Text>

            {/* special call to action */}
            <Button
              variant="solid"
              colorScheme="brand"
              borderRadius={15}
              as={Link}
              to="/join"
              fontSize="large"
              px="6"
            >
              Get Involved
            </Button>
          </HStack>
        </Box>

        {/* Hamburger Menu */}
        <Box display={{ base: "flex", lg: "none" }}>
          <Box
            _hover={{
              cursor: "pointer",
            }}
            onClick={() => {
              onOpen();
            }}
          >
            <HamburgerIcon boxSize={8} color="white" />
          </Box>
        </Box>
      </HStack>

      {/* Drawer for Small Screen */}
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="white" p={5}>
          <DrawerBody>
            <VStack spacing={4}>
              <Text fontSize="1.5rem" as={Link} to="/" onClick={onClose}>
                About
              </Text>
              <Text fontSize="1.5rem" as={Link} to="/events" onClick={onClose}>
                Events
              </Text>
              <Text fontSize="1.5rem" as={Link} to="/ibd" onClick={onClose}>
                IBD Workshop
              </Text>
              <Text
                fontSize="1.5rem"
                as={Link}
                to="/consulting"
                onClick={onClose}
              >
                Consulting Workshop
              </Text>
              <Text
                fontSize="1.5rem"
                as={Link}
                to="/leadership"
                onClick={onClose}
              >
                Leadership
              </Text>
              <Text
                fontSize="1.5rem"
                as={Link}
                to="/leadership"
                onClick={onClose}
              >
                VITA
              </Text>
              <Text
                fontSize="1.5rem"
                as={Link}
                to="/leadership"
                onClick={onClose}
              >
                Get Involved
              </Text>
              <CloseIcon
                color="black"
                marginY={4}
                _hover={{ cursor: "pointer" }}
                onClick={onClose}
              />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
