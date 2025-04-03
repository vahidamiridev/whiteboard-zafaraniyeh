import { actionTypes } from "../assets/constants";
import { ConfigAction, ConfigState, SnapShotAction } from "interfaces";

export const initialConfigState: ConfigState = {
  canvas: null,
  ctx: null,
  bgCanvas: null,
  bgCtx: null,
  inputImage: null, // تغییر داده شد
  canvasWidth: "",
  canvasHeight: "",
  snapShot: {} as ImageData,
};

export const configStateReducer = (
  state: ConfigState, 
  action: ConfigAction | SnapShotAction
): ConfigState => {
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
          ctx.lineCap = "round";

          // بررسی و استفاده از inputImageRef.current
          const inputImage = inputImageRef.current ? inputImageRef.current : null;

          return {
            ...state,
            canvas: canvasRef.current,
            ctx,
            bgCanvas: bgCanvasRef.current,
            bgCtx,
            canvasWidth: canvasRef.current.offsetWidth.toString(),
            canvasHeight: canvasRef.current.offsetHeight.toString(),
            inputImage, // تغییرات اینجا
            snapShot: ctx.getImageData(0, 0, canvasRef.current.offsetWidth, canvasRef.current.offsetHeight),
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
