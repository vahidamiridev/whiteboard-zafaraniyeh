import { createContext } from "react";
import useAppReducer from "../hooks/useAppReducer";
import useInitialConfigReducer from "../hooks/useInitialConfigReducer";

export const AppDispatchContext = createContext();
export const AppStateContext = createContext();
export const AppInitialStateContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [stateApp, dispatchApp] = useAppReducer();
  const [configState, dispatchConfigState] = useInitialConfigReducer();

  return (
    <AppInitialStateContext.Provider
      value={{ configState, dispatchConfigState }}
    >
      <AppDispatchContext.Provider value={dispatchApp}>
        <AppStateContext.Provider value={stateApp}>
          {children}
        </AppStateContext.Provider>
      </AppDispatchContext.Provider>
    </AppInitialStateContext.Provider>
  );
};
