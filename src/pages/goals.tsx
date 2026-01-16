import { AddButton } from "@/components/buttonAdd";
import PageTitle from "@/components/pageTitle";
import { Flex } from "@chakra-ui/react";
import { Plus } from "lucide-react";

export function Goals(): React.ReactElement {
  return (
    <Flex justifyContent="space-between">
      <PageTitle
        title="Metas financeiras"
        subtitle="Defina suas metas financeiras"
      />

      <AddButton title="Nova meta" icon={<Plus />} />
    </Flex>
  );
}
