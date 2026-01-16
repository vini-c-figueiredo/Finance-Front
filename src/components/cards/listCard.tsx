import { Card, Text, VStack, Box, Flex } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import type React from "react";

interface ListCardProps {
  title: string;
  icon?: React.ReactNode;
  items: {
    label: string; // Título (ex: "Macbook")
    current: number; // Já pago (ex: 100)
    total: number; // Total (ex: 500)
  }[];
}

export default function ListCard({ title, items, icon }: ListCardProps) {
  return (
    <Card.Root rounded={35} bg={useColorModeValue("white", "gray.800")}>
      <Card.Body>
        <Card.Title mb="4">
          <Flex gap={2} align="center">
            {icon && <span>{icon}</span>}
            {title}
          </Flex>
        </Card.Title>

        <VStack align="stretch" gap={4}>
          {items.map((item) => {
            const percent = (item.current / item.total) * 100;

            return (
              <Box key={item.label}>
                <Flex justifyContent={"space-between"}>
                  {/* Título */}
                  <Text fontWeight="bold">{item.label}</Text>

                  <Text fontSize="sm" fontWeight="bold">
                    {percent}%
                  </Text>
                </Flex>

                {/* Ex: R$100,00 de R$500,00 */}
                <Text fontSize="sm" color="gray.600" mb={1}>
                  R${item.current.toFixed(2)} de R${item.total.toFixed(2)}
                </Text>

                {/* Barra de progresso com gradiente */}
                <Box
                  width="100%"
                  height="10px"
                  bg="gray.200"
                  rounded="full"
                  overflow="hidden"
                >
                  <Box
                    height="100%"
                    width={`${percent}%`}
                    bg="linear-gradient(90deg, #4FACFE, #00F2FE)" // Gradiente azul
                  />
                </Box>
              </Box>
            );
          })}
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}
