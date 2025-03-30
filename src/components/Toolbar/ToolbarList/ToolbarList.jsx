import { ToolbarListStyled_ul } from "./ToolbarListStyled";
import ToolbarItem from "../ToolbarItem/ToolbarItem";
import {
  actionTypes,
  backgroundCanvasToolsIds,
  iconsInMainToolbar,
} from "../../../assets/constants";
import { addDispatch } from "../../../utils/helper";
import useAppDispatchContext from "../../../hooks/useAppDispatchContext";
import { gridHandlelr } from "../../../utils/mainLogic";
import useAppInitialStateContext from "../../../hooks/useAppInitialStateContext";
import useAppStateContext from "../../../hooks/useAppStateContext";

export default function ToolbarList({ inputImageRef }) {
  const appDispatch = useAppDispatchContext();
  const appState = useAppStateContext();
  const { configState, dispatchConfigState } = useAppInitialStateContext();
  const { bgCtx } = configState;
  const { size } = appState.tools.backgroundCanvas;

  const clickHandler = (e) => {
    if (e.target.tagName === "INPUT") {
      e.target.type === "button" &&
        e.target.getAttribute("data-color") &&
        addDispatch(appDispatch, actionTypes.SET_COLOR_WITH_ID, {
          id: e.target.id,
          color:
            e.target.type === "color"
              ? e.target.value
              : e.target.getAttribute("data-color"),
        });

      e.target.type === "checkbox" &&
        e.target.id.split("-").length > 1 &&
        addDispatch(appDispatch, actionTypes.SET_SHAPE_FILL_STATUS, {
          id: e.target.id,
          isFilledShape: e.target.checked,
        });
      if (
        (e.target.getAttribute("data-action") &&
          e.target.getAttribute("data-action") !== "UI-OPERATION") ||
        e.target.getAttribute("data-task")
      )
        addDispatch(
          appDispatch,
          actionTypes.SET_WHITCH_TOOLS_SELECTED_WITH_ID,
          { id: e.target.id }
        );

      e.target.getAttribute("data-task") &&
        backgroundCanvasToolsIds.includes(e.target.getAttribute("data-task")) &&
        gridHandlelr(size, e.target.getAttribute("data-task"), configState);
    }
  };

  let mainIcons = iconsInMainToolbar.map((icon) => {
    return (
      <ToolbarItem
        key={icon.id}
        iconName={icon.name}
        hasSubmenu={icon.hasSubMenu}
        iconId={icon.id}
        subMenuItems={icon.subMenuItems}
        type={icon.type}
        inputImageRef={inputImageRef}
        dataAction={icon.dataAction}
      />
    );
  });

  return (
    <>
      <ToolbarListStyled_ul
        onClick={(e) => {
          clickHandler(e);
        }}
      >
        {mainIcons}
      </ToolbarListStyled_ul>
    </>
  );
}
