import {
  Button,
  Image,
  CardFooter,
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
  Link,
  ButtonGroup,
} from "@chakra-ui/react";

export default function ApplyCard() {
  return (
    <Card w="md">
      <CardBody>
        <Image
          src="/ibd/apply.jpeg"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="10" spacing={2}>
          <Heading size="md" fontSize="1.2rem">
            Apply Soon
          </Heading>
          <Text fontWeight="bold" color="grey" fontSize="1rem">
            Application opens Early October
          </Text>
          <Text mt={5} fontSize="1.2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            bg="gray.200"
            color="gray.500"
            borderRadius={15}
            disabled
          >
            Apply Soon
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
