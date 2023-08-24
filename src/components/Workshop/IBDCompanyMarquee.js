import Marquee from "react-fast-marquee";
import { Box, Text, VStack, Image, HStack } from "@chakra-ui/react";

export default function IBDCompanyMarquee({
  title,
  description,
  companiesCount,
}) {
  const companyKeysList = [...Array(companiesCount).keys()];
  const half = Math.ceil(companyKeysList.length / 2);
  const firstHalf = companyKeysList.slice(0, half);
  const secondHalf = companyKeysList.slice(half);

  return (
    <Box>
      <Text fontSize="2rem" fontWeight="bold" mb={5}>
        {title}
      </Text>
      <Text fontSize="1.2rem" fontWeight="regular" mb={10}>
        {description}
      </Text>

      <Box my={5}>
        <Marquee speed={50} gradient={true}>
          {secondHalf.map((key) => (
            <Box px={10}>
              <Image
                height={50}
                width="auto"
                src={"/ibd/companies/company" + key + ".png"}
              />
            </Box>
          ))}
        </Marquee>
      </Box>
      <Box my={5}>
        <Marquee speed={50} direction="right" gradient={true}>
          {firstHalf.map((key) => (
            <Box px={10}>
              <Image
                height={50}
                width="auto"
                src={"/ibd/companies/company" + key + ".png"}
              />
            </Box>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
}
