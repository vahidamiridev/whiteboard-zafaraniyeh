import React from "react";
import { appInitialState } from "../reducers/appReducer";
import appReducer from "../reducers/appReducer";
import { AppActions, AppState } from "interfaces"; // یا هر جایی که تایپ‌های شما هستند

export default function useAppReducer(): [AppState, React.Dispatch<AppActions>] {
  const [stateApp, dispatchApp] = React.useReducer(appReducer, appInitialState);

  return [stateApp, dispatchApp];
}

