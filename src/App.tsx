import React from "react";
import Layout from "./components/Layout/Layout";
import Toolbar from "./components/Toolbar/Toolbar";
import Whiteboards from "./components/Whiteboards/Whiteboards";
import { actionTypes } from "./assets/constants";
import { addDispatch } from "./utils/helper";
import useAppInitialStateContext from "./hooks/useAppInitialStateContext";
import useAppStateContext from "./hooks/useAppStateContext";

const App: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement >(null!);
  const bgCanvasRef = React.useRef<HTMLCanvasElement >(null!);
  const inputImageRef = React.useRef<HTMLInputElement >(null!);

  const appState = useAppStateContext();
  const { configState, dispatchConfigState } = useAppInitialStateContext();

  React.useEffect(() => {

    if (inputImageRef.current && canvasRef.current && bgCanvasRef.current) {
      addDispatch(dispatchConfigState, actionTypes.INITIAL_CONFIG_STATES, {
        canvasRef,
        bgCanvasRef,
        inputImageRef,
      });
    }
  }, [dispatchConfigState]);

  return (
    <Layout>
      <Toolbar inputImageRef={inputImageRef} />
      <Whiteboards bgCanvasRef={bgCanvasRef} canvasRef={canvasRef} />
    </Layout>
  );
};

export default App;
