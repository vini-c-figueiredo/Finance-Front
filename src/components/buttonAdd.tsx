import { Button } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import React from "react";

interface Props extends React.ComponentProps<typeof Button> {
  title: string;
  icon?: React.ReactNode;
}

export function AddButton({ title, icon, ...rest }: Props) {
  return (
    <Button
      bg={useColorModeValue("blue.800", "blue.700")}
      color={useColorModeValue("white", "blue.100")}
      rounded="lg"
      px={10}
      py={6}
      justifyContent={"space-between"}
      {...rest}
    >
      {icon && <span>{icon}</span>}
      {title}
    </Button>
  );
}
