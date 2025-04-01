export function addDispatch(dispatch, actionType, actionPayload) {
  return dispatch({
    type: actionType,
    payload: { ...actionPayload },
  });
}
