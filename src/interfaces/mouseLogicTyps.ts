import { AppActions, AppState, ConfigAction, ConfigState, SnapShotAction } from "interfaces";
import { MouseCoords } from "./mainLogicTyps";

export interface BaseMouse{
    event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>,
    appState: AppState,
    configState: ConfigState,
    prevMouseCoordsRef: React.RefObject<MouseCoords>
}
export interface ClickStart extends BaseMouse{
    dispatchConfigState: React.Dispatch<ConfigAction | SnapShotAction>,
    appDispatch: React.Dispatch<AppActions>,
}
export interface MouseUp{
    event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>,
    appDispatch: React.Dispatch<AppActions>,
}

