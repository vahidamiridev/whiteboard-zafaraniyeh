import { ToolbarItemStyled_li } from "./ToolbarItemStyled";
import SubMenu from "../SubMenu/SubMenu";
import { drawToolsIds } from "../../../assets/constants";
import useAppStateContext from "../../../hooks/useAppStateContext";

export default function ToolbarItem({    dataAction,
  iconId,
  hasSubmenu,
  iconName,
  subMenuItems,
  type,
  inputImageRef,}) {
const appState = useAppStateContext()

  return (
    <>
      <ToolbarItemStyled_li
        color={ drawToolsIds.includes(iconId) ? appState.tools[iconId].color :"black"}
      >
        <input
          type={type}
          id={iconId}
          hidden
          data-action={dataAction}
          data-menu={hasSubmenu}
        />
        {hasSubmenu && <SubMenu id={iconId} subMenuItems={subMenuItems} />}
        <label htmlFor={iconId} ref={type === "file" ? inputImageRef : null}>
          <i className={`fas ${iconName}`} />
        </label>
      </ToolbarItemStyled_li>
    </>
  );
}
