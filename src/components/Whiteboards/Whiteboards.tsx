import React, {  JSX, useRef } from "react";
import {WhiteboardsStyled_div } from "./WhiteboardsStyled";
import useAppStateContext from "../../hooks/useAppStateContext";
import {
  mouseUpHandler,
  movingPointerOnCanvas,
  startLeftClickOnCanvas,
} from "../../utils/mainLogic";
import useAppDispatchContext from "../../hooks/useAppDispatchContext";
import useAppInitialStateContext from "../../hooks/useAppInitialStateContext";
import { CursorIds } from "interfaces";
export interface  WhiteboardsProps{
  bgCanvasRef : React.RefObject<HTMLCanvasElement |null>;
  canvasRef : React.RefObject<HTMLCanvasElement |null>;
}

const Whiteboards :React.FC<WhiteboardsProps> = ({ bgCanvasRef, canvasRef }) : JSX.Element=> {

  const prevMouseCoordsRef = useRef({ x: 0, y: 0 }); //use this just for handel drawFreeHandLine
  const { configState, dispatchConfigState } = useAppInitialStateContext();
  const appState = useAppStateContext();
  const appDispatch = useAppDispatchContext();




  return (
    <>
      <WhiteboardsStyled_div
       $whitchToolsSelected = {appState.whitchToolsSelected as CursorIds}
       >
        <canvas
          onMouseDown={(event) => startLeftClickOnCanvas(
              {event,
              appState,
              configState,
              prevMouseCoordsRef,
              dispatchConfigState,
              appDispatch}
            )
          }
          onMouseMove={(event) =>
            movingPointerOnCanvas(
             { event,
              appState,
              configState,
              prevMouseCoordsRef}
            )
          }
          onMouseUp={(event) =>mouseUpHandler({event , appDispatch})}
          onTouchStart={(event) => startLeftClickOnCanvas(
        {    event,
          appState,
            configState,
            prevMouseCoordsRef,
            dispatchConfigState,
            appDispatch}
            )
          }
          onTouchMove={(event) => {
            movingPointerOnCanvas(
           {   event,
              appState,
              configState,
              prevMouseCoordsRef}
            );
          }}
          onTouchEnd={(event) => mouseUpHandler({event , appDispatch})}
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
export default Whiteboards;