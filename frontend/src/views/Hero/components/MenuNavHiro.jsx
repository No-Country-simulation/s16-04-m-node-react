import { SegmentedControl } from "@radix-ui/themes";

const MenuNavHiro = ({ isBurgerMenu }) => {
  return (
    <>
      {isBurgerMenu ? (
        <div className="burger-menu-items">
          <div className="menu-item">Servicios</div>
          <div className="menu-item">Especialidades</div>
          <div className="menu-item">Blog</div>
        </div>
      ) : (
        <SegmentedControl.Root defaultValue="servicio">
          <SegmentedControl.Item value="servicio">Servicios</SegmentedControl.Item>
          <SegmentedControl.Item value="especialidades">Especialidades</SegmentedControl.Item>
          <SegmentedControl.Item value="blog">Blog</SegmentedControl.Item>
        </SegmentedControl.Root>
      )}
    </>
  );
};

export default MenuNavHiro;
