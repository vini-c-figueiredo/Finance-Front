import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import { AddButton } from "./buttonAdd";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function DrawerForm() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer.Root open={open} onOpenChange={(details) => setOpen(details.open)}>
      <Drawer.Trigger asChild>
        <AddButton title="Novo lançamento" icon={<Plus />} />
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop
          style={{
            backdropFilter: "blur(5px) brightness(0.8)",
            background: "rgba(0, 0, 0, 0.15)",
          }}
        />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>

            <Drawer.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Drawer.Body>

            <Drawer.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </Drawer.Footer>

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
