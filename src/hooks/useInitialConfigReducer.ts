import React from "react";
import { initialConfigState } from "../reducers/initialStateReducer";
import { configStateReducer } from "../reducers/initialStateReducer";

export default function useInitialConfigReducer() {
  const [ConfigState, dispatchConfigState] = React.useReducer(
    configStateReducer,
    initialConfigState
  );
  return [ ConfigState,dispatchConfigState];
}
