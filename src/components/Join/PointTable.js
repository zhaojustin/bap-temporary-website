import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function PointTable() {
  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            * You must cross Gold or Platinum to apply for IBD & Consulting
            Workshop
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Event Type</Th>
              <Th isNumeric color="brand.500">
                Member
              </Th>
              <Th isNumeric color="yellow.600">
                Gold
              </Th>
              <Th isNumeric color="gray.500">
                Platinum
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Speaker</Td>
              <Td isNumeric color="brand.500">
                17
              </Td>
              <Td isNumeric color="yellow.600">
                19
              </Td>
              <Td isNumeric color="gray.500">
                22
              </Td>
            </Tr>
            <Tr>
              <Td>Social</Td>
              <Td isNumeric color="brand.500">
                10
              </Td>
              <Td isNumeric color="yellow.600">
                11
              </Td>
              <Td isNumeric color="gray.500">
                13
              </Td>
            </Tr>
            <Tr>
              <Td>Community Service</Td>
              <Td isNumeric color="brand.500">
                9
              </Td>
              <Td isNumeric color="yellow.600">
                10
              </Td>
              <Td isNumeric color="gray.500">
                12
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
