import { Card, Flex, Table } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

interface TableCardProps {
  title: string;
  icon?: React.ReactNode;
  items: {
    label: string; // Título (ex: "Macbook")
    category: string; // Já pago (ex: 100)
    value: number; // Total (ex: 500)
    date: string;
    status: string;
  }[];
}

export default function TableCard({ title, items, icon }: TableCardProps) {
  return (
    <Card.Root rounded={35} bg={useColorModeValue("white", "gray.800")}>
      <Card.Body>
        <Card.Title mb="4">
          <Flex gap={2} align="center">
            {icon && <span>{icon}</span>}
            {title}
          </Flex>
        </Card.Title>

        <Table.Root size="lg">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader color={"gray.500"}>
                Descrição
              </Table.ColumnHeader>
              <Table.ColumnHeader color={"gray.500"}>
                Categoria
              </Table.ColumnHeader>
              <Table.ColumnHeader color={"gray.500"}>Valor</Table.ColumnHeader>
              <Table.ColumnHeader color={"gray.500"}>Data</Table.ColumnHeader>
              <Table.ColumnHeader color={"gray.500"}>Status</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {items.map((item) => (
              <Table.Row key={item.label}>
                <Table.Cell>{item.label}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell color={"green.500"}> R$ {item.value},00</Table.Cell>
                <Table.Cell>{item.date}</Table.Cell>
                <Table.Cell>{item.status}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Card.Body>
    </Card.Root>
  );
}
