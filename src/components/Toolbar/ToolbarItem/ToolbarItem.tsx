import React from "react";
import { ToolbarItemStyled_li } from "./ToolbarItemStyled";
import SubMenu from "../SubMenu/SubMenu";
import { drawToolsIds , SubMenuItemType } from "../../../assets/constants";
import useAppStateContext from "../../../hooks/useAppStateContext";
import { JSX } from "react/jsx-runtime";

 interface ToolbarItemProps {
  key:string;
  iconId: string;
  iconName: string;
  type: "checkbox" | "button" | "file";
  dataAction: string;
  hasSubmenu: boolean;
  subMenuItems?: SubMenuItemType[]; 
  inputImageRef:React.RefObject<HTMLInputElement>
}


 const ToolbarItem :React.FC<ToolbarItemProps> = ({
   iconId ,
   iconName,
   type,
   dataAction,
   hasSubmenu,
   subMenuItems,
   inputImageRef
}) : JSX.Element => {
const appState = useAppStateContext()

  return (
    <>
      <ToolbarItemStyled_li
        color={ drawToolsIds.includes(iconId as typeof drawToolsIds[number]) ? appState.tools[iconId].color :"black"}
      >
        <input
          type={type}
          id={iconId}
          hidden
          data-action={dataAction}
          data-menu={hasSubmenu}
          ref={type === "file" ? inputImageRef : null}
        />
         {hasSubmenu && subMenuItems && <SubMenu id={iconId} subMenuItems={subMenuItems} />}
        <label htmlFor={iconId} >
          <i className={`fas ${iconName}`} />
        </label>
      </ToolbarItemStyled_li>
    </>
  );
}
export default ToolbarItem