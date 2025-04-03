import React from "react";
import { initialConfigState } from "../reducers/initialStateReducer";
import { configStateReducer } from "../reducers/initialStateReducer";
import { ConfigAction, ConfigState, SnapShotAction } from "interfaces";


export default function useInitialConfigReducer(): [ConfigState, React.Dispatch<ConfigAction |SnapShotAction>] {
  const [configState, dispatchConfigState] = React.useReducer(
    configStateReducer,
    initialConfigState
  );
  return [configState, dispatchConfigState];
}
