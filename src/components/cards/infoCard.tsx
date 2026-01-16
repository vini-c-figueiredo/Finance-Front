import type { cardMain } from "@/types/cardMainType";
import { Card, Text } from "@chakra-ui/react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useColorModeValue } from "../ui/color-mode";

export default function InfoCard(props: cardMain) {
  const isPositive = props.value >= 0;

  const Icon =
    props.type === "entrada"
      ? ArrowUp
      : props.type === "saida"
      ? ArrowDown
      : isPositive
      ? ArrowUp
      : ArrowDown;

  const iconColor =
    props.type === "entrada"
      ? "#34A853"
      : props.type === "saida"
      ? "#F44336"
      : isPositive
      ? "#34A853"
      : "#F44336";

  return (
    <Card.Root rounded={35} bg={useColorModeValue("white", "gray.800")}>
      <Card.Body gap="2">
        <Card.Title mb="2">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {props.title}
            <Icon size={18} color={iconColor} />
          </div>
        </Card.Title>

        <Card.Description
          fontSize="2xl"
          fontWeight="bold"
          color={isPositive ? "green.500" : "red.500"}
        >
          {Math.abs(props.value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Card.Description>
      </Card.Body>

      <Card.Footer>
        <Text fontSize="xs" color="gray.400">
          {props.footer}
        </Text>
      </Card.Footer>
    </Card.Root>
  );
}
