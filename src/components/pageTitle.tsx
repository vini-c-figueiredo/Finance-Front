import { Heading, Text } from "@chakra-ui/react";
import type { pageTitle } from "@/types/pageTitleType";

export default function PageTitle(props: pageTitle) {
  return (
    <div>
      <Heading gap={5} size="3xl" mb={3} fontFamily={"serif"}>
        {props.title}
      </Heading>

      <Text textStyle="md" mb="6">
        {props.subtitle}
      </Text>
    </div>
  );
}
