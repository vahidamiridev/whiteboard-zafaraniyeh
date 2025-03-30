import SubMenuItem from "../SubMenuItem/SubMenuItem";
import { ContainerSubMenu_div } from "./SubMenuStyled";

export default function SubMenu({ subMenuItems }) {
  const submenuItem = subMenuItems.map((subMenuItem) => {
    return <SubMenuItem 
    key={subMenuItem.id}
     subMenuItem={subMenuItem} 
     />;
  });

  return (
    <>
      <ContainerSubMenu_div>
        <ul>{submenuItem}</ul>
      </ContainerSubMenu_div>
    </>
  );
}
