import { Card } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useColorModeValue } from "../ui/color-mode";

interface ChartCardProps {
  title: string;
  data: { name: string; value: number }[];
}

export default function ChartCard({ title, data }: ChartCardProps) {
  return (
    <Card.Root
      rounded={35}
      height="350px"
      bg={useColorModeValue("white", "gray.800")}
      mb={5}
    >
      <Card.Body>
        <Card.Title mb="4">{title}</Card.Title>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3182CE" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card.Root>
  );
}
