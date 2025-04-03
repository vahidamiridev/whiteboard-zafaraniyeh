import React, { createContext, ReactNode } from "react";
import useAppReducer from "../hooks/useAppReducer";
import useInitialConfigReducer from "../hooks/useInitialConfigReducer";
import { AppState, ConfigState, AppActions, ConfigAction, SnapShotAction } from "interfaces";

interface AppContextProps {
  children: ReactNode;
}
 export interface AppInitialStateContext {
  configState: ConfigState;
  dispatchConfigState:React.Dispatch<ConfigAction | SnapShotAction>;
}


export const AppDispatchContext = createContext<React.Dispatch<AppActions> | undefined>(undefined);
export const AppStateContext = createContext<AppState | undefined>(undefined);
export const AppInitialStateContext = createContext<AppInitialStateContext | undefined>(undefined);

export const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  const [stateApp, dispatchApp] = useAppReducer();
  const [configState ,dispatchConfigState] = useInitialConfigReducer();  

  return (
    <AppInitialStateContext.Provider value={{configState ,dispatchConfigState}}>
      <AppDispatchContext.Provider value={dispatchApp}>
        <AppStateContext.Provider value={stateApp}>
          {children}
        </AppStateContext.Provider>
      </AppDispatchContext.Provider>
    </AppInitialStateContext.Provider>
  );
};