import type React from "react";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import PageTitle from "@/components/pageTitle";
import PeriodButtons from "@/components/periodButtons";
import InfoCard from "@/components/cards/infoCard";
import ChartCard from "@/components/cards/chartCard";
import ListCard from "@/components/cards/listCard";
import CategoryCard from "@/components/cards/categoryCard";
import { Target } from "lucide-react";
import { MockEntrada } from "@/mock/main/MockEntradaMain";
import { Mockmetas } from "@/mock/main/MockMetasMain";
import { MockConsumo } from "@/mock/main/MockConsumoMain";
import { MockGrafMain } from "@/mock/main/MockGrafMain";

export function Dashboard(): React.ReactElement {
  return (
    <div>
      {/*Mostra o titulo da pagina */}
      <PageTitle
        title="Dashboard financeiro"
        subtitle="Visualize suas finanças e acompanhe suas metas"
      />

      {/*Esses botões, devem alterar as informações dos gráficos, e de informações */}
      <PeriodButtons />

      <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} gap="4" mt={8}>
        {MockEntrada.map((card) => (
          <InfoCard
            key={card.title}
            title={card.title}
            value={card.value}
            footer={card.footer}
            type={card.type}
          />
        ))}

        {/* Gráfico (Preciso ajustar, pra trazer duas barras a de entradas e saídas) */}
        <GridItem colSpan={{ base: 1, lg: 2 }}>
          <ChartCard title="Entradas por mês" data={MockGrafMain} />
        </GridItem>

        {/* Listagem de metas (Preciso adicionar a barra de progresso da meta e paginação) */}
        <ListCard
          title="Metas Financeiras"
          icon={<Target />}
          items={Mockmetas}
        />
      </SimpleGrid>

      {/* Lista das categorias que mais consumiram */}
      <CategoryCard
        title="Categorias mais consumidas"
        categories={MockConsumo}
      />
    </div>
  );
}
