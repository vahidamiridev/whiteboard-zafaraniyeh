import { actionTypes } from "assets/constants";
import { AppActions, ConfigAction, SnapShotAction } from "interfaces";
import React from "react";


export function addDispatch(
  dispatch:React.Dispatch<any>,
  actionType: keyof typeof actionTypes,
  actionPayload?: ConfigAction["payload"] | AppActions["payload"] | SnapShotAction["payload"]
) {
  if (actionPayload) {
      dispatch({
        type: actionType,
        payload: actionPayload ,
      })
  } else {
    dispatch({
      type: actionType,
    });
  }
}

