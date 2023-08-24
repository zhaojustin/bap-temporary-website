import {
  Box,
  Stack,
  HStack,
  Text,
  VStack,
  Badge,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
} from "@chakra-ui/react";
import { LuCheck } from "react-icons/lu";
import ApplyCard from "./ApplyCard";
import PointTable from "../../components/Join/PointTable";
import CheckpointTable from "../../components/Join/CheckpointTable";

export default function CandidateInfo() {
  return (
    <Box>
      <VStack alignItems="left" spacing={5}>
        <Stack
          gap={{ base: 5, lg: 10, xl: 20 }}
          justifyContent="space-between"
          direction={{ base: "column", lg: "row" }}
        >
          {/* INFO */}
          <Box>
            {/* Overview */}
            <VStack spacing={5} alignItems="left">
              <Text fontSize="2rem" fontWeight="bold" mt={{ base: 10, md: 0 }}>
                Joining BAP
              </Text>
              <Text fontSize="1.2rem">
                Newcomers apply to BAP as <strong>candidates</strong>.
                Candidates attend workshops, community service, and other events
                to gain points. If a candidate has earned enough points by the
                end of the semester, they will become an official member.
              </Text>
            </VStack>

            {/* Candidate Requirements */}
            <VStack spacing={5} alignItems="left" mt={20}>
              <Text fontSize="2rem" fontWeight="bold" mt={{ base: 10, md: 0 }}>
                Candidate Requirements
              </Text>
              {/* GPA */}
              <Box>
                <HStack alignItems="center" spacing={5}>
                  <Text display="inline">
                    <LuCheck fontSize={24} fontWeight="regular" />
                  </Text>
                  <Text fontSize="1.2rem" fontWeight="regular">
                    3.500+ GPA <strong>minimum</strong>
                  </Text>
                </HStack>
              </Box>
              {/* Year Standing */}
              <Box>
                <HStack alignItems="center" spacing={5}>
                  <Text display="inline">
                    <LuCheck fontSize={24} fontWeight="regular" />
                  </Text>
                  <Text fontSize="1.2rem" fontWeight="regular">
                    Sophomore/Junior standing ({">"}32 credits)
                  </Text>
                </HStack>
                <Text
                  fontSize="1rem"
                  fontWeight="regular"
                  color="GrayText"
                  mt={2}
                >
                  Freshmen will be able to apply in the Spring semester, but are
                  still encouraged to attend BAP events in the fall.
                </Text>
              </Box>
              {/* Major */}
              <Box>
                <HStack alignItems="center" spacing={5}>
                  <Text display="inline">
                    <LuCheck fontSize={24} fontWeight="regular" />
                  </Text>
                  <Text fontSize="1.2rem" fontWeight="regular">
                    <strong>Stern student </strong>Concentrating in Finance,
                    Accounting, Computing & Data Science, or Stern-Tisch/BPE/BTE
                  </Text>
                </HStack>
              </Box>
            </VStack>
          </Box>

          {/* Application */}
          <Box mt={{ base: 10, xl: 0 }}>
            <ApplyCard />
          </Box>
        </Stack>

        <SimpleGrid
          mt={20}
          gap={{ base: 5, lg: 10, xl: 20 }}
          columns={{ base: 1, lg: 2 }}
        >
          {/* Point System Overview */}
          <VStack spacing={5} alignItems="left">
            <Text fontSize="2rem" fontWeight="bold" mt={{ base: 5, md: 0 }}>
              Point System
            </Text>
            <Text fontSize="1.2rem">
              The point system helps BAP identify candidates who dedicate
              significant efforts into the candidate process. There will be a
              variety of events to attend, each being a Speaker, Social, or
              Community Service event.
            </Text>
            <Box mt={5}>
              <PointTable />
            </Box>
          </VStack>

          {/* Checkpoint System */}
          <VStack spacing={5} alignItems="left">
            <Text fontSize="2rem" fontWeight="bold" mt={{ base: 5, md: 0 }}>
              <Badge colorScheme="red" m={1}>
                New
              </Badge>{" "}
              Checkpoint System
            </Text>
            <Text fontSize="1.2rem">
              The checkpoint system will ensure all candidates are on track to
              cross by the final checkpoint before initiation.
            </Text>
            <Box mt={5}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={LuCheck} color="gray.500" />
                  Brand new system for F23 classes & beyond
                </ListItem>
                <ListItem>
                  <ListIcon as={LuCheck} color="gray.500" />
                  Candidates must reach the minimum threshold by each point to
                  continue in the process
                </ListItem>
                <ListItem>
                  <ListIcon as={LuCheck} color="gray.500" />
                  Even though some thresholds are at 0 points, it is possible to
                  be in the negatives
                </ListItem>
                <ListItem>
                  <ListIcon as={LuCheck} color="gray.500" />
                  More information about the checkpoints will be made available
                  after rush week concludes
                </ListItem>
              </List>
            </Box>
            <Box mt={5}>
              <CheckpointTable />
            </Box>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Box>
  );
}
