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

export default function CheckpointTable() {
  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            * More information will be given after rush week
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Event Type</Th>
              <Th isNumeric>Alpha</Th>
              <Th isNumeric>Bravo</Th>
              <Th isNumeric>Charlie</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Speaker</Td>
              <Td isNumeric>4</Td>
              <Td isNumeric>9</Td>
              <Td isNumeric>15</Td>
            </Tr>
            <Tr>
              <Td>Social</Td>
              <Td isNumeric>2</Td>
              <Td isNumeric>5</Td>
              <Td isNumeric>9.5</Td>
            </Tr>
            <Tr>
              <Td>Community Service</Td>
              <Td isNumeric>3</Td>
              <Td isNumeric>5</Td>
              <Td isNumeric>9</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
