import React from "react";
import Layout from "./components/Layout/Layout";
import Toolbar from "./components/Toolbar/Toolbar";
import Whiteboards from "./components/Whiteboards/Whiteboards";
import { actionTypes } from "./assets/constants";
import { addDispatch } from "./utils/helper";
import useAppInitialStateContext from "./hooks/useAppInitialStateContext";
import useAppDispatchContext from "./hooks/useAppDispatchContext";
import useAppStateContext from "./hooks/useAppStateContext";

function App() {
  const canvasRef = React.useRef(null);
  const bgCanvasRef = React.useRef(null);
  const inputImageRef = React.useRef(null);

  const { configState, dispatchConfigState } = useAppInitialStateContext();
  const appDispatch = useAppDispatchContext();
  const appState = useAppStateContext()

  React.useEffect(() => {
    if (inputImageRef && canvasRef && bgCanvasRef) {
      addDispatch(dispatchConfigState, actionTypes.INITIAL_CONFIG_STATES, {
        canvasRef,
        bgCanvasRef,
        inputImageRef,
      });
    }
  }, []);

  return (
    <Layout>
      <Toolbar inputImageRef={inputImageRef} />
      <Whiteboards bgCanvasRef={bgCanvasRef} canvasRef={canvasRef} />
    </Layout>
  );
}

export default App;
