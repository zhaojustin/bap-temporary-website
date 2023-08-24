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

export default function ScheduleCard() {
  return (
    <Card w="lg">
      <CardBody>
        <Image
          src="/vita/gould.jpeg"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="10" spacing={5}>
          <Heading size="md">Schedule Meeting</Heading>
          <Text>
            VITA is moving online! In order to continue assisting clients with
            their tax filing needs, we require clients to have video
            conferencing abilities (camera and microphone) and an internet
            connection to protect the identity and security of those we will
            file taxes for (Refer to Disclaimers for more info).
          </Text>

          <Text fontWeight="bold">
            Please read the following instructions about our 100% virtual tax
            filing process carefully before your appointment:{" "}
            <Link
              href="https://bit.ly/2N6WdU5"
              target="_blank"
              color="blue.600"
              _hover={{ textDecoration: "none" }}
            >
              bit.ly/2N6WdU5
            </Link>
            .
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="brand"
            borderRadius={15}
            as={Link}
            href="https://calendly.com/bap-nyu-vita"
            target="_blank"
            _hover={{ textDecoration: "none", bg: "brand.600" }}
          >
            Schedule Meeting
          </Button>
          <Button
            variant="ghost"
            colorScheme="brand"
            borderRadius={15}
            as={Link}
            href="https://calendly.com/bap-nyu-vita"
            target="_blank"
            _hover={{ textDecoration: "none", bg: "brand.50" }}
          >
            calendly.com/bap-nyu-vita
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
