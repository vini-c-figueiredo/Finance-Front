import ChartCard from "@/components/cards/chartCard";
import InfoCard from "@/components/cards/infoCard";
import TableCard from "@/components/cards/tableCard";
import DrawerForm from "@/components/drawer";
import PageTitle from "@/components/pageTitle";
import PeriodButtons from "@/components/periodButtons";
import { mockLanct } from "@/mock/transaction/MockLanct";
import { mockCards } from "@/mock/transaction/MocksCards";
import { mockTrend } from "@/mock/transaction/MockTrend";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { List } from "lucide-react";

export function Transaction(): React.ReactElement {

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
        {mockCards.map((card) => (
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
        data={mockTrend}
      />

      <TableCard
        title="Lançamentos"
        icon={<List />}
        items={mockLanct}
      />
    </div>
  );
}
