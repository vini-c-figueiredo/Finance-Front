import { Box, Button } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

export default function PeriodButtons() {
  const hoverBg = useColorModeValue("blue.200", "blue.700");
  const hoverColor = useColorModeValue("blue.700", "white");

  const borderColor = useColorModeValue("blue.500", "blue.300");
  const textColor = useColorModeValue("blue.700", "blue.200");

  return (
    <Box display="flex" gap={3} mb={6}>
      {["Última semana", "Último mês", "Último ano"].map((label) => (
        <Button
          key={label}
          variant="outline"
          rounded="lg"
          px={6}
          borderColor={borderColor}
          color={textColor}
          _hover={{
            bg: hoverBg,
            color: hoverColor,
          }}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
}
