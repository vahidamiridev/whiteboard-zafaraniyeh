import React, { JSX, useEffect } from "react";
import { ToolbarListStyled_ul } from "./ToolbarListStyled";
import ToolbarItem from "../ToolbarItem/ToolbarItem";
import {
  actionTypes,
  backgroundCanvasToolsIds,
  iconsInMainToolbar,
  IDS,
  shapsToolsIds,
} from "../../../assets/constants";
import { addDispatch } from "../../../utils/helper";
import useAppDispatchContext from "../../../hooks/useAppDispatchContext";
import { gridHandlelr, saveImageHandler } from "../../../utils/mainLogic";
import useAppInitialStateContext from "../../../hooks/useAppInitialStateContext";
import useAppStateContext from "../../../hooks/useAppStateContext";
 interface ToolbarListProps{
  inputImageRef:React.RefObject<HTMLInputElement> 
}



 const ToolbarList : React.FC<ToolbarListProps> = ({ inputImageRef }) : JSX.Element => {
  const appDispatch = useAppDispatchContext();
  const appState = useAppStateContext();
  const { configState } = useAppInitialStateContext();
  const { size } = appState.tools.backgroundCanvas ;
  useEffect(() => {
    if (configState.bgCtx && backgroundCanvasToolsIds.includes(appState.whitchToolsSelected as typeof backgroundCanvasToolsIds[number])) {
      gridHandlelr(size, appState, configState)
    }
  }, [ appState.whitchToolsSelected]);


  const clickHandler = (e: React.MouseEvent<HTMLUListElement>) => {
    const targetElm = e.target as HTMLInputElement;
    if (targetElm && targetElm.tagName === "INPUT") {
      if (targetElm.id === IDS.saveImage) {
        saveImageHandler(configState);
      }
  
      if (targetElm.getAttribute("data-color") || targetElm.type === "color") {
        const color = targetElm.type === "color"
          ? targetElm.value
          : targetElm.getAttribute("data-color") ?? undefined; 
  
        addDispatch(appDispatch, actionTypes.SET_COLOR_WITH_ID, {
          id: targetElm.id,
          color: color,  
        });
      }
  
      if (targetElm.type === "checkbox" && targetElm.id.split("-").length > 1) {
        addDispatch(appDispatch, actionTypes.SET_SHAPE_FILL_STATUS, {
          id: targetElm.id,
          isFilledShape: targetElm.checked,
        });
      }
  
      if (
        (targetElm.getAttribute("data-action") &&
          targetElm.getAttribute("data-action") !== "UI-OPERATION")
      ) {
        addDispatch(
          appDispatch,
          actionTypes.SET_WHITCH_TOOLS_SELECTED_WITH_ID,
          { id: targetElm.id }
        );
      }
      if (backgroundCanvasToolsIds.includes(targetElm.getAttribute("data-task") as typeof backgroundCanvasToolsIds[number])) {
        gridHandlelr(size, appState, configState);
        addDispatch(
          appDispatch,
          actionTypes.SET_WHITCH_TOOLS_SELECTED_WITH_ID,
          { id: targetElm.id }
        );
      }
      if (shapsToolsIds.includes(targetElm.getAttribute("data-task")as typeof shapsToolsIds[number])) {
        addDispatch(
          appDispatch,
          actionTypes.SET_WHITCH_TOOLS_SELECTED_WITH_ID,
          { id: targetElm.id }
        );
      }
  

    }
  };
  


  let mainIcons = iconsInMainToolbar.map((icon) => {
    return (
      <ToolbarItem
        key={icon.id}
        iconId={icon.id}
        iconName={icon.name}
        type={icon.type}
        dataAction={icon.dataAction}
        hasSubmenu={icon.hasSubMenu}
        subMenuItems={icon.subMenuItems}
        inputImageRef={inputImageRef}
      />
    );
  });

  return (
    <>
      <ToolbarListStyled_ul
        onClick={(e)=> {
          clickHandler(e);
        }}

      >
        {mainIcons}
      </ToolbarListStyled_ul>
    </>
  );
}
export default  ToolbarList;