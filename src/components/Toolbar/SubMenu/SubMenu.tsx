import React from "react";
import { ContainerSubMenu_div } from "./SubMenuStyled";
import { SubMenuItemType } from "assets/constants";
import  SubMenuItem from "../SubMenuItem/SubMenuItem";

interface SubMenuProps{
  id:string ;
  subMenuItems :SubMenuItemType[];
}

 const  SubMenu :React.FC<SubMenuProps> = ({ id , subMenuItems })=> {

  const subItem = subMenuItems.map((item) => {
    return<SubMenuItem
      key={item.id}
      subMenuItem={item} 
     />;
  });

  return (
    <>
      <ContainerSubMenu_div>
        <ul>{subItem}</ul>
      </ContainerSubMenu_div>
    </>
  );
}
export default SubMenu