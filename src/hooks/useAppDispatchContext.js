import { useContext } from "react";
import { AppDispatchContext } from "../contexts/AppContextProvider";

export default function useAppDispatchContext() {
  const context = useContext(AppDispatchContext);

  if (!context)
    throw new Error(
      "before use this custom hook set Provider ===>> DispatchContxtProvider <<=== :)"
    );
  return context;
}
