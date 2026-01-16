import { Card, Text, VStack, Box } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

interface BarCategory {
  label: string;
  value: number; // porcentagem 0 a 100
}

interface CategoryCardProps {
  title: string;
  categories: BarCategory[];
}

export default function CategoryCard({ title, categories }: CategoryCardProps) {
  return (
    <Card.Root rounded={35} bg={useColorModeValue("white", "gray.800")}>
      <Card.Body>
        <Card.Title mb="4">{title}</Card.Title>

        <VStack align="stretch" gap={4}>
          {categories.map((cat) => (
            <Box key={cat.label}>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Text fontSize="sm">{cat.label}</Text>
                <Text fontSize="sm" fontWeight="bold">
                  {cat.value}%
                </Text>
              </Box>

              <Box
                width="100%"
                height="10px"
                bg="gray.200"
                rounded="full"
                overflow="hidden"
              >
                <Box
                  height="100%"
                  width={`${cat.value}%`}
                  bg="red.400"
                  rounded="full"
                />
              </Box>
            </Box>
          ))}
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}
