import Menu from "@/components/menu";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function DefaultPage() {
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <Box minH="100vh" bg={bg}>
      {/* Menu fixo no topo (opcional) */}
      <Menu />

      {/* Área principal do conteúdo */}
      <Box as="main" px={6} py={6}>
        <Outlet />
      </Box>
    </Box>
  );
}
