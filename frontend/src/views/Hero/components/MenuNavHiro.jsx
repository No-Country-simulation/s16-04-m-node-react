import { SegmentedControl } from "@radix-ui/themes";

const MenuNavHiro = ({ isBurgerMenu }) => {
  return (
    <>
      {isBurgerMenu ? (
        <div className="burger-menu-items">
          <div className="menu-item"><a href="#servicios">Servicios</a></div>
          <div className="menu-item"><a href="#especialidades">Especialidades</a></div>
          <div className="menu-item"><a href="#blog">Blog</a></div>
        </div>
      ) : (
        <SegmentedControl.Root defaultValue="servicio" className="rounded-md shadow-lg shadow-slate-900">
          <SegmentedControl.Item value="servicio"><a href="#servicios">Servicios</a></SegmentedControl.Item>
          <SegmentedControl.Item value="especialidades"> <a href="#especialidades">Especialidades</a></SegmentedControl.Item>
          <SegmentedControl.Item value="blog"><a href="#blog">Blog</a></SegmentedControl.Item>
        </SegmentedControl.Root>
      )}
    </>
  );
};


export default MenuNavHiro;
