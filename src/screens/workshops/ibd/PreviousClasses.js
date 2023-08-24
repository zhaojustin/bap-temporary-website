import { Stack, Text, Box, VStack } from "@chakra-ui/react";

// import components
import CohortCard from "../../../components/Workshop/CohortCard";

export default function PreviousClasses() {
  return (
    <Stack spacing={10}>
      <VStack alignItems="left" spacing={5}>
        <Text fontSize="2rem" fontWeight="bold">
          Previous Cohorts
        </Text>
        {/* Large screen only text */}
        <Text fontSize="1.2rem" display={{ base: "none", md: "flex" }}>
          Scroll right to see all of the past cohorts that have graduated from
          IBD Workshop.
        </Text>
        {/* Small screen only text */}
        <Text fontSize="1.2rem" display={{ base: "flex", md: "none" }}>
          Listed below are all of the past cohorts that have graduated from IBD
          Workshop.
        </Text>
      </VStack>

      {/* horizontal scrolling box */}
      <Box
        display={{ base: "none", md: "flex" }}
        alignItems="start"
        flexWrap="nowrap"
        overflowX="auto"
        bg="gray.300"
        p={5}
        borderRadius={10}
      >
        <CohortCard
          cohort={"Spring 2023"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Harrison Liu",
            "Julia Li",
            "Leo Li",
            "Nathan Chong",
            "Rishi Saggurti",
          ]}
        />
        <CohortCard
          cohort={"Fall 2022"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Neil Sarkar",
            "Arjun Kubal",
            "Brandon Yep",
            "Brian Gao",
            "Cynthia Zhang",
            "John Abrams",
            "Justin Yang",
            "Katie Cheng",
            "Krishi Shukla",
            "Mani Ganna",
            "Pradyun Pandey",
            "Swiss Duangthip",
            "Sarah Naanaa",
          ]}
        />
        <CohortCard
          cohort={"Spring 2022"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Richard Fan",
            "Julia Wu",
            "Derek Li",
            "Mary Chen",
            "Ziho Kim",
            "Scott Chung",
            "Peter Shi",
            "Jeff Koo",
            "Bobby Eisenman",
          ]}
        />
        <CohortCard
          cohort={"Fall 2021"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Chahat Mittal",
            "David Huang",
            "Harry Xu",
            "Jonathan Liu",
            "Kelvin Zheng",
            "Pranav Kanchi",
            "Sanders Zhang",
            "Stephanie Li",
            "Sujay Maddela",
            "Tiffany Wang",
            "Chloe Wang",
            "Raghul Ravindranathan",
          ]}
        />
        <CohortCard
          cohort={"Spring 2021"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Ken Yang",
            "Kathleen Flores",
            "Dara Arabzadeh",
            "Sam Wieder",
            "Tanav Suman",
            "Andrew He",
            "Yukai Liu",
            "Jo Tong",
            "Amanda He",
            "Nikhil Aggarwal",
            "Jessica Ho",
            "Daniel Li",
          ]}
        />
        <CohortCard
          cohort={"Fall 2020"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Kevin Zhang",
            "Kevin Li",
            "Jack Wang",
            "Shannon Huang",
            "Vandi Saireddy",
            "Sean Yu",
            "Jerry Hao",
            "Julia Li",
            "Helen Chen",
            "Starry Qie",
            "Marina Chang",
            "Alison Kim",
          ]}
        />
        <CohortCard
          cohort={"Spring 2020"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Grace Huang",
            "Aum Senthatti",
            "Kelly Tannady",
            "Tiffany Chang",
            "Thomas Monsellato",
            "Laura Zhang",
            "Douglas Tsang",
            "Anirudh Sharma",
            "Eric Lee",
            "Kumail Raza",
          ]}
        />
        <CohortCard
          cohort={"Fall 2019"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Dennis Lo",
            "Jessica Ahn",
            "Lauren Lin",
            "Jeffrey Li",
            "Karan Ragunath",
            "Dave Smoczynski",
            "Vivian Luo",
            "Kartik Nalamalapu",
            "Olivia Fan",
            "Ulysses Zhang",
            "Roger Shui",
          ]}
        />
        <CohortCard
          cohort={"Spring 2019"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Avery Farm",
            "Nick Kong",
            "Andrew Chanin",
            "Justin Choi",
            "Katherine Lin",
            "Madhav Gupta",
            "Eui-Hyun Kim",
            "Spencer Judd",
            "Jessica Chen",
            "Larry Wang",
            "Tiger Wu",
            "Jacky Chen",
            "Kevin Ho",
            "Cloris Mo",
            "Saurav Bose",
            "Joey Hwang",
          ]}
        />
        <CohortCard
          cohort={"Fall 2018"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Aiden Jing",
            "Heejin Kang",
            "Kevin Choe",
            "Ethan Lin",
            "Nancy Chen",
            "Jimin Choi",
            "Nathan Li",
            "Paul Chang",
            "Oliver Tu",
            "Matt Zhang",
            "Jules Ong",
            "Yutong Zhang",
            "Simon Zeng",
            "Nathan Co",
            "Melissa Zhang",
            "Jeff Xu",
          ]}
        />
      </Box>

      {/* horizontal scrolling box */}
      <VStack display={{ base: "flex", md: "none" }} alignItems="center" p={5}>
        <CohortCard
          cohort={"Spring 2023"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Harrison Liu",
            "Julia Li",
            "Leo Li",
            "Nathan Chong",
            "Rishi Saggurti",
          ]}
        />
        <CohortCard
          cohort={"Fall 2022"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Neil Sarkar",
            "Arjun Kubal",
            "Brandon Yep",
            "Brian Gao",
            "Cynthia Zhang",
            "John Abrams",
            "Justin Yang",
            "Katie Cheng",
            "Krishi Shukla",
            "Mani Ganna",
            "Pradyun Pandey",
            "Swiss Duangthip",
            "Sarah Naanaa",
          ]}
        />
        <CohortCard
          cohort={"Spring 2022"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Richard Fan",
            "Julia Wu",
            "Derek Li",
            "Mary Chen",
            "Ziho Kim",
            "Scott Chung",
            "Peter Shi",
            "Jeff Koo",
            "Bobby Eisenman",
          ]}
        />
        <CohortCard
          cohort={"Fall 2021"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Chahat Mittal",
            "David Huang",
            "Harry Xu",
            "Jonathan Liu",
            "Kelvin Zheng",
            "Pranav Kanchi",
            "Sanders Zhang",
            "Stephanie Li",
            "Sujay Maddela",
            "Tiffany Wang",
            "Chloe Wang",
            "Raghul Ravindranathan",
          ]}
        />
        <CohortCard
          cohort={"Spring 2021"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Ken Yang",
            "Kathleen Flores",
            "Dara Arabzadeh",
            "Sam Wieder",
            "Tanav Suman",
            "Andrew He",
            "Yukai Liu",
            "Jo Tong",
            "Amanda He",
            "Nikhil Aggarwal",
            "Jessica Ho",
            "Daniel Li",
          ]}
        />
        <CohortCard
          cohort={"Fall 2020"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Kevin Zhang",
            "Kevin Li",
            "Jack Wang",
            "Shannon Huang",
            "Vandi Saireddy",
            "Sean Yu",
            "Jerry Hao",
            "Julia Li",
            "Helen Chen",
            "Starry Qie",
            "Marina Chang",
            "Alison Kim",
          ]}
        />
        <CohortCard
          cohort={"Spring 2020"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Grace Huang",
            "Aum Senthatti",
            "Kelly Tannady",
            "Tiffany Chang",
            "Thomas Monsellato",
            "Laura Zhang",
            "Douglas Tsang",
            "Anirudh Sharma",
            "Eric Lee",
            "Kumail Raza",
          ]}
        />
        <CohortCard
          cohort={"Fall 2019"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Dennis Lo",
            "Jessica Ahn",
            "Lauren Lin",
            "Jeffrey Li",
            "Karan Ragunath",
            "Dave Smoczynski",
            "Vivian Luo",
            "Kartik Nalamalapu",
            "Olivia Fan",
            "Ulysses Zhang",
            "Roger Shui",
          ]}
        />
        <CohortCard
          cohort={"Spring 2019"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Avery Farm",
            "Nick Kong",
            "Andrew Chanin",
            "Justin Choi",
            "Katherine Lin",
            "Madhav Gupta",
            "Eui-Hyun Kim",
            "Spencer Judd",
            "Jessica Chen",
            "Larry Wang",
            "Tiger Wu",
            "Jacky Chen",
            "Kevin Ho",
            "Cloris Mo",
            "Saurav Bose",
            "Joey Hwang",
          ]}
        />
        <CohortCard
          cohort={"Fall 2018"}
          chairs={["Shannon Huang", "David Huang"]}
          members={[
            "Aiden Jing",
            "Heejin Kang",
            "Kevin Choe",
            "Ethan Lin",
            "Nancy Chen",
            "Jimin Choi",
            "Nathan Li",
            "Paul Chang",
            "Oliver Tu",
            "Matt Zhang",
            "Jules Ong",
            "Yutong Zhang",
            "Simon Zeng",
            "Nathan Co",
            "Melissa Zhang",
            "Jeff Xu",
          ]}
        />
      </VStack>
    </Stack>
  );
}
