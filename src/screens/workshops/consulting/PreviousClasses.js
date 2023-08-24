import { Stack, Center, Text, VStack, SimpleGrid } from "@chakra-ui/react";

// import components
import CohortCard from "../../../components/Workshop/CohortCard";

export default function PreviousClasses() {
  return (
    <Stack spacing={10}>
      <Center>
        <Text fontSize="2rem" fontWeight="bold">
          Previous Cohorts
        </Text>
      </Center>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }}>
        <CohortCard
          cohort={"Fall 2022"}
          chairs={["Shannon Huang", "David Huang"]}
          members={["Justin Zhao", "Justin Zhao", "Justin Zhao", "Justin Zhao"]}
        />
        <CohortCard
          cohort={"Fall 2022"}
          chairs={["Shannon Huang", "David Huang"]}
          members={["Justin Zhao", "Justin Zhao", "Justin Zhao", "Justin Zhao"]}
        />
        <CohortCard
          cohort={"Fall 2022"}
          chairs={["Shannon Huang", "David Huang"]}
          members={["Justin Zhao", "Justin Zhao", "Justin Zhao", "Justin Zhao"]}
        />
      </SimpleGrid>
    </Stack>
  );
}
