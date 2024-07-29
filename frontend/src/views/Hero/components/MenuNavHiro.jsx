import { SegmentedControl } from "@radix-ui/themes";

const MenuNavHiro = () => {
  return (
    <>
      <SegmentedControl.Root defaultValue="servicio">
        <SegmentedControl.Item value="servicio">Servicios</SegmentedControl.Item>
        <SegmentedControl.Item value="especialidades">Especialidades</SegmentedControl.Item>
        <SegmentedControl.Item value="blog">Blog</SegmentedControl.Item>
      </SegmentedControl.Root>
    </>
  );
};

export default MenuNavHiro;
