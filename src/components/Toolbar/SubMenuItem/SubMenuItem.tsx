import React, { JSX } from "react";
import {
  actionTypes,
  IDS,
  SubMenuItemType,
} from "../../../assets/constants";
import useAppDispatchContext from "../../../hooks/useAppDispatchContext";
import useAppInitialStateContext from "../../../hooks/useAppInitialStateContext";
import useAppStateContext from "../../../hooks/useAppStateContext";
import { addDispatch } from "../../../utils/helper";
import { gridHandlelr } from "../../../utils/mainLogic";
import { ItemOfSubMenuStyled_input } from "./SubMenuItemStyled";

interface SubMenuItemProps {
  key: string;
  subMenuItem: SubMenuItemType;
}

const SubMenuItem: React.FC<SubMenuItemProps> = ({ subMenuItem }): JSX.Element => {
  const appDispatch = useAppDispatchContext();
  const appState = useAppStateContext();
  const { configState } = useAppInitialStateContext();




  return (
    <ItemOfSubMenuStyled_input
      // value={getValue()}
      id={subMenuItem.id}
      type={subMenuItem.type}
      data-color={subMenuItem.dataColor}
      data-task={subMenuItem.dataTask}
      color={subMenuItem.dataColor}
      $pathIcon={subMenuItem.pathIcon || ""}
      min={[IDS.xGrid, IDS.yGrid, IDS.xyGrid].includes(subMenuItem.id as "xGrid" | "yGrid" | "xyGrid") ? 30 : 3}
      max={[IDS.xGrid, IDS.yGrid, IDS.xyGrid].includes(subMenuItem.id as "xGrid" | "yGrid" | "xyGrid") ? 60 : 80}
      onChange={(e) => {
        const backgroundCanvasGridIds = [IDS.xGrid, IDS.yGrid, IDS.xyGrid];
        if (subMenuItem.type === "color") {
          addDispatch(appDispatch, actionTypes.SET_COLOR_WITH_ID, {
            id: e.target.id,
            color: e.target.value,
          });
        }

        if (e.target.type === "range") {
          if (backgroundCanvasGridIds.includes(appState.whitchToolsSelected as typeof backgroundCanvasGridIds[number])) {
            gridHandlelr(e.target.value, appState, configState);
          } else {
            addDispatch(appDispatch, actionTypes.SET_SIZE_WITH_ID, {
              id: e.target.id,
              size: e.target.value,
            });
          }
        }
      }}
    />
  );
};

export default SubMenuItem;
