import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Box, Callout, Tabs } from "@radix-ui/themes";
import Cardproximacita from "./Cardproximacita";

const Tabmenuhistorial = () => {
  return (
    <Tabs.Root defaultValue="proximas">
      <Tabs.List>
        <Tabs.Trigger value="proximas">PROXIMAS</Tabs.Trigger>
        <Tabs.Trigger value="canceladas">CANCELADAS</Tabs.Trigger>
        <Tabs.Trigger value="historial">HISTORIAL</Tabs.Trigger>
      </Tabs.List>

      <Box pt="3">
        <Tabs.Content value="proximas" style={{display:'flex', justifyContent:'center'}}>
          <Cardproximacita/>
        </Tabs.Content>

        <Tabs.Content value="canceladas">
          <Callout.Root>
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>Usted aun no posee citas.</Callout.Text>
          </Callout.Root>
        </Tabs.Content>

        <Tabs.Content value="historial">
          <Callout.Root>
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>Usted aun no posee historial.</Callout.Text>
          </Callout.Root>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
};

export default Tabmenuhistorial;
