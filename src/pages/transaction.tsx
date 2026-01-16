import ChartCard from "@/components/cards/chartCard";
import InfoCard from "@/components/cards/infoCard";
import TableCard from "@/components/cards/tableCard";
import DrawerForm from "@/components/drawer";
import PageTitle from "@/components/pageTitle";
import PeriodButtons from "@/components/periodButtons";
import type { cardMain } from "@/types/cardMainType";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { List } from "lucide-react";

export function Transaction(): React.ReactElement {
  const cardsList: cardMain[] = [
    {
      title: "Receitas",
      value: 1520.75,
      footer: "",
      type: "entrada",
    },
    {
      title: "Despesas",
      value: -830.1,
      footer: "",
      type: "saida",
    },
  ];

  return (
    <div>
      <Flex justifyContent="space-between">
        <PageTitle
          title="Lançamentos"
          subtitle="Gerencie suas receitas e despesas"
        />
        <DrawerForm />
      </Flex>

      <PeriodButtons />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap="4" mt={8} mb={5}>
        {cardsList.map((card) => (
          <InfoCard
            key={card.title}
            title={card.title}
            value={card.value}
            footer={card.footer}
            type={card.type}
          />
        ))}
      </SimpleGrid>

      <ChartCard
        title="Tendência Semanal"
        data={[
          { name: "Jan", value: 1200 },
          { name: "Fev", value: 900 },
          { name: "Mar", value: 1350 },
        ]}
      />

      <TableCard
        title="Lançamentos"
        icon={<List />}
        items={[
          {
            label: "Salário",
            category: "Trabalho",
            date: "15/11/2025",
            status: "Recebido",
            value: 5000,
          },
          {
            label: "Uber",
            category: "Transporte",
            date: "15/11/2025",
            status: "Pago",
            value: 35,
          },
          {
            label: "Salário",
            category: "Trabalho",
            date: "15/11/2025",
            status: "Recebido",
            value: 5000,
          },
        ]}
      />
    </div>
  );
}
