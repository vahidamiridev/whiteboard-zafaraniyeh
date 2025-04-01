import { actionTypes } from "../assets/constants";
import { ActionType, AppInitialStateContextType } from "interfaces";

export const initialConfigState: AppInitialStateContextType = {
  canvas: null,
  ctx: null,
  bgCanvas: null,
  bgCtx: null,
  inputImage: null,
  canvasWidth: "",
  canvasHeight: "",
  snapShot: {} as ImageData
};


export const configStateReducer = (
  state: AppInitialStateContextType, 
  action: ActionType
): AppInitialStateContextType => {
  switch (action.type) {
    case actionTypes.INITIAL_CONFIG_STATES:
      const { canvasRef, bgCanvasRef, inputImageRef } = action.payload;

      if (canvasRef.current && bgCanvasRef.current) {
        const ctx = canvasRef.current.getContext("2d", { willReadFrequently: true });
        const bgCtx = bgCanvasRef.current.getContext("2d", { willReadFrequently: true });

        if (ctx && bgCtx) {

          bgCanvasRef.current.width = bgCanvasRef.current.offsetWidth;
          bgCanvasRef.current.height = bgCanvasRef.current.offsetHeight;
          canvasRef.current.width = canvasRef.current.offsetWidth;
          canvasRef.current.height = canvasRef.current.offsetHeight;
          ctx.lineCap = "round"

          return {
            ...state,
            canvas: canvasRef.current,
            ctx,
            bgCanvas: bgCanvasRef.current,
            bgCtx,
            canvasWidth: canvasRef.current.offsetWidth.toString(),
            canvasHeight: canvasRef.current.offsetHeight.toString(),
            inputImage: inputImageRef.current,
            snapShot:ctx.getImageData( 0, 0, canvasRef.current.offsetWidth, canvasRef.current.offsetHeight )
          };
        }
      }
      return state;

    case actionTypes.SET_SNAPSHPT_WITH_CTX_AND_CANVAS_WIDTH_HEIGHT:
      return {
        ...state,
        snapShot: action.payload.snapshot, 
      };

    default:
      return state; 
  }
};
