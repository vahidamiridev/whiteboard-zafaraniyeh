import { useRef } from "react";
import {
  actionTypes,
  backgroundCanvasToolsIds,
  IDS,
  shapsToolsIds,
} from "../../../assets/constants";
import useAppDispatchContext from "../../../hooks/useAppDispatchContext";
import useAppInitialStateContext from "../../../hooks/useAppInitialStateContext";
import useAppStateContext from "../../../hooks/useAppStateContext";
import { addDispatch } from "../../../utils/helper";
import { gridHandlelr } from "../../../utils/mainLogic";
import { ItemOfSubMenuStyled_input } from "../SubMenuItem/SubMenuItemStyled";

export default function SubMenuItem({ subMenuItem }) {
  const appDispatch = useAppDispatchContext();
  const appState = useAppStateContext();
  const { configState } = useAppInitialStateContext();

  let generatedWhichtoolsSelected = shapsToolsIds.includes(
    appState.whitchToolsSelected
  )
    ? "shaps"
    : backgroundCanvasToolsIds.includes(appState.whitchToolsSelected)
    ? "backgroundCanvas"
    : appState.whitchToolsSelected;

  return (
    <ItemOfSubMenuStyled_input
      // value={
      //   subMenuItem.type === "range" &&
      //   appState.tools[generatedWhichtoolsSelected]
      //     ? appState.tools[generatedWhichtoolsSelected].size
      //     : undefined
      // }
      id={subMenuItem.id}
      type={subMenuItem.type}
      data-color={subMenuItem.dataColor}
      data-task={subMenuItem.dataTask}
      color={subMenuItem.dataColor}
      $pathIcon={subMenuItem.pathIcon}
      min={
        [IDS.xGrid, IDS.yGrid, IDS.xyGrid].includes(
          appState.whitchToolsSelected
        )
          ? 30
          : 3
      }
      max={
        [IDS.xGrid, IDS.yGrid, IDS.xyGrid].includes(
          appState.whitchToolsSelected
        )
          ? 60
          : 80
      }
      onChange={(e) => {
        const backgroundCanvasGridIds = [IDS.xGrid, IDS.yGrid, IDS.xyGrid];
        subMenuItem.type === "color" &&
          addDispatch(appDispatch, actionTypes.SET_COLOR_WITH_ID, {
            id: e.target.id,
            color: e.target.value,
          });

        e.target.type === "range" &&
        backgroundCanvasGridIds.includes(appState.whitchToolsSelected)
          ? gridHandlelr(e.target.value, appState, configState)
          : e.target.type === "range" &&
            !backgroundCanvasGridIds.includes(appState.whitchToolsSelected)
          ? addDispatch(appDispatch, actionTypes.SET_SIZE_WITH_ID, {
              id: e.target.id,
              size: e.target.value,
            })
          : null;
      }}
    />
  );
}
