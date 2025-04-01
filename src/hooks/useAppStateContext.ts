import { useContext } from "react";
import { AppStateContext } from "../contexts/AppContextProvider";

export default function useAppStateContext  (){
  const context = useContext(AppStateContext);

  if (!context)
    throw new Error(
      "before use this cusom hook set povider ===>>  AppContextProvider <<=== :)"
    );
  return context;
};

