import React from "react";
import { appInitialState } from "../reducers/appReducer";
import appReducer from "../reducers/appReducer";
import { AppInitialState } from "interfaces"; // یا هر جایی که تایپ‌های شما هستند

export default function useAppReducer(): [AppInitialState, React.Dispatch<any>] {
  const [stateApp, dispatchApp] = React.useReducer(appReducer, appInitialState);

  return [stateApp, dispatchApp];
}
