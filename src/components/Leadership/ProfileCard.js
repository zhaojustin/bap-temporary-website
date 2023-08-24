import { Box, Text, Center, VStack, Image } from "@chakra-ui/react";

// import components

export default function ProfileCard({ name, position }) {
  return (
    <Box>
      <Box>
        <Image
          src={
            "/leadership/" + name.split(" ")[0] + name.split(" ")[1] + ".jpg"
          }
          alt="Profile"
          width="100%"
          height="100%"
          borderRadius={15}
        />
      </Box>
      <VStack marginTop="5" spacing={0} alignItems="left">
        <Text fontSize="1.4rem" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="1rem" fontWeight="regular">
          {position}
        </Text>
      </VStack>
    </Box>
  );
}
