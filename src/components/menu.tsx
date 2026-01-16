/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Flex, HStack, IconButton, Link, Text } from "@chakra-ui/react";
import type { link } from "../types/linkType";
import type { Props } from "@/types/propType";
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode";
import { Sun, Moon, Target, DollarSign, LayoutDashboard } from "lucide-react";
import { useLocation } from "react-router-dom";

const Links: link[] = [
  { name: "Dashboard", link: "/dashboard", icon: LayoutDashboard },
  { name: "Lançamentos", link: "/transaction", icon: DollarSign },
  { name: "Metas", link: "/goals", icon: Target },
];

const NavLink = ({
  children,
  link,
  icon: Icon,
}: Props & { icon: React.ElementType }) => {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <Link
      href={link}
      px={3}
      py={2}
      rounded="2xl"
      fontWeight="medium"
      display="flex"
      alignItems="center"
      gap={2}
      bg={isActive ? useColorModeValue("blue.800", "blue.700") : "transparent"}
      color={
        isActive
          ? useColorModeValue("white", "blue.100")
          : useColorModeValue("gray.700", "gray.300")
      }
      _hover={
        isActive
          ? {
              bg: useColorModeValue("blue.800", "blue.700"),
              color: useColorModeValue("white", "blue.100"),
              cursor: "default",
            }
          : {
              bg: useColorModeValue("gray.300", "gray.700"),
              color: useColorModeValue("black", "white"),
              textDecoration: "none",
            }
      }
    >
      <Icon size={18} />
      {children}
    </Link>
  );
};
export default function Menu(): React.ReactElement {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "gray.800");
  const titleColor = useColorModeValue("blue.700", "blue.500");

  return (
    <Box bg={bg} px={6} shadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Título */}
        <Text
          fontWeight="bold"
          fontSize="lg"
          color={titleColor}
          fontFamily={"serif"}
        >
          Controle Financeiro
        </Text>

        {/* Navegação */}
        <HStack as="nav" gap={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link.name} link={link.link} icon={link.icon}>
              {link.name}
            </NavLink>
          ))}

          {/* Botão de alternância de tema */}
          <IconButton
            aria-label="Alternar tema"
            onClick={toggleColorMode}
            variant="ghost"
          >
            {colorMode === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </IconButton>
        </HStack>
      </Flex>
    </Box>
  );
}
