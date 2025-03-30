import { useContext } from "react";
import { AppInitialStateContext } from "../contexts/AppContextProvider";

export default function useAppInitialStateContext  (){
  const context = useContext(AppInitialStateContext);

  if (!context)
    throw new Error(
      "before use this cusom hook set povider ===>>  AppContextProvider <<=== :)"
    );
  return context;
};

