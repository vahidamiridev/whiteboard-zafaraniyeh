import React from "react";
import { appInitialState } from "../reducers/appReducer";
import appReducer from "../reducers/appReducer";

export default function useAppReducer() {
  const [stateApp, dispatchApp] = React.useReducer(appReducer, appInitialState);

  return [stateApp, dispatchApp];
}
