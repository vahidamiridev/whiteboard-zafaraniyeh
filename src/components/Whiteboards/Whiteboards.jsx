import { useRef } from "react";
import { WhiteboardsStyled_div } from "./WhiteboardsStyled";
import useAppStateContext from "../../hooks/useAppStateContext";
import {
  mouseUpHandler,
  movingPointerOnCanvas,
  startLeftClickOnCanvas,
} from "../../utils/mainLogic";
import useAppDispatchContext from "../../hooks/useAppDispatchContext";
import { addDispatch } from "../../utils/helper";
import { actionTypes } from "../../assets/constants";
import useAppInitialStateContext from "../../hooks/useAppInitialStateContext";

export default function Whiteboards({ bgCanvasRef, canvasRef }) {
  const prevMouseCoordsRef = useRef({ x: 0, y: 0 }); //use this just for handel drawFreeHandLine
  const { configState, dispatchConfigState } = useAppInitialStateContext();
  const appState = useAppStateContext();
  const appDispatch = useAppDispatchContext();


  return (
    <>
      <WhiteboardsStyled_div
       $whitchToolsSelected = {appState.whitchToolsSelected}>
        <canvas
          onMouseDown={(event) => {

            startLeftClickOnCanvas(
              event,
              configState,
              dispatchConfigState,
              appState,
              appDispatch,
              prevMouseCoordsRef
            );
          }}
          onMouseMove={(event) =>
            movingPointerOnCanvas(
              event,
              appState,
              configState,
              prevMouseCoordsRef
            )
          }
          onMouseUp={(event) =>mouseUpHandler(event , appDispatch)}
          onTouchStart={(event) => {

            startLeftClickOnCanvas(
              event,
              configState,
              dispatchConfigState,
              appDispatch,
              prevMouseCoordsRef
            );
          }}
          onTouchMove={(event) => {
            movingPointerOnCanvas(
              event,
              appState,
              configState,
              prevMouseCoordsRef
            );
          }}
          onTouchEnd={(event) => mouseUpHandler(event , appDispatch)}
          ref={canvasRef}
          id="canvas_front"
          style={{ zIndex: 1 }}
        ></canvas>

        <canvas
          ref={bgCanvasRef}
          id="canvas_back"
          style={{ zIndex: 0  , backgroundColor:appState.tools.backgroundCanvas.color}}
        ></canvas>
      </WhiteboardsStyled_div>
    </>
  );
}
