import { Box, Text, VStack, Image, HStack } from "@chakra-ui/react";

export default function ProfileCard({ src, name, bio }) {
  return (
    <Box>
      <Image src={src} alt={name + " Headshot"} borderRadius={5} />
      <VStack marginTop={7} spacing={5} alignItems="left">
        <Text fontSize="1.2rem" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="1.2rem" fontWeight="regular">
          {bio}
        </Text>
      </VStack>
    </Box>
  );
}
