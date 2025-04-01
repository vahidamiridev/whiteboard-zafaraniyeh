import React, { createContext, ReactNode } from "react";
import useAppReducer from "../hooks/useAppReducer";
import useInitialConfigReducer from "../hooks/useInitialConfigReducer";

interface AppContextProps {
  children: ReactNode;
}
interface AppDispatchContextType {

}
interface AppStateContextType {

}
interface AppInitialStateContextType {

}



export const AppDispatchContext = createContext<AppDispatchContextType | undefined>(undefined);
export const AppStateContext = createContext<AppStateContextType | undefined>(undefined);
export const AppInitialStateContext = createContext<AppInitialStateContextType | undefined>(undefined);

export const AppContextProvider:React.FC<AppContextProps> = ({ children }) => {
  
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
