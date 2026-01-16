import type React from "react";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import type { cardMain } from "@/types/cardMainType";
import PageTitle from "@/components/pageTitle";
import PeriodButtons from "@/components/periodButtons";
import InfoCard from "@/components/cards/infoCard";
import ChartCard from "@/components/cards/chartCard";
import ListCard from "@/components/cards/listCard";
import CategoryCard from "@/components/cards/categoryCard";
import { Target } from "lucide-react";

export function Dashboard(): React.ReactElement {
  {
    /*Isso vai sair daqui, quando fizer a integração da API */
  }
  const cardsList: cardMain[] = [
    {
      title: "Total de Entradas",
      value: 1520.75,
      footer: "Mês atual",
      type: "entrada",
    },
    {
      title: "Total de saídas",
      value: -830.1,
      footer: "Mês atual",
      type: "saida",
    },
    {
      title: "Saldo Atual",
      value: 690.65,
      footer: "Saldo do mês",
      type: "saldo",
    },
  ];

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
        {cardsList.map((card) => (
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
          <ChartCard
            title="Entradas por mês"
            data={[
              { name: "Jan", value: 1200 },
              { name: "Fev", value: 900 },
              { name: "Mar", value: 1350 },
            ]}
          />
        </GridItem>

        {/* Listagem de metas (Preciso adicionar a barra de progresso da meta e paginação) */}
        <ListCard
          title="Metas Financeiras"
          icon={<Target />}
          items={[
            { label: "Macbook", current: 1500, total: 15000 },
            { label: "Transporte", current: 0, total: 50 },
            { label: "Assinaturas", current: 300, total: 600 },
          ]}
        />
      </SimpleGrid>

      {/* Lista das categorias que mais consumiram */}
      <CategoryCard
        title="Categorias mais consumidas"
        categories={[
          { label: "Alimentação", value: 72 },
          { label: "Transporte", value: 40 },
          { label: "Lazer", value: 55 },
          { label: "Assinaturas", value: 20 },
        ]}
      />
    </div>
  );
}
