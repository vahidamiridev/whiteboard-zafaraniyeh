import { actionTypes } from "../assets/constants";

export const initialConfigState = {
  canvas: null,
  ctx: null,
  bgCanvas: null,
  bgCtx: null,
  inputImage: null,
  canvasWidth: "",
  canvasHeight: "",
  snapShot: {},
};

export const  configStateReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INITIAL_CONFIG_STATES:
      const { canvasRef, bgCanvasRef, inputImageRef } = action.payload;
      bgCanvasRef.current.width = bgCanvasRef.current.offsetWidth;
      bgCanvasRef.current.height = bgCanvasRef.current.offsetHeight;
      canvasRef.current.width = canvasRef.current.offsetWidth;
      canvasRef.current.height = canvasRef.current.offsetHeight;
      canvasRef.current.getContext("2d").lineCap = "round";

      return {
        ...state,
        canvas: canvasRef.current,
        ctx: canvasRef.current.getContext("2d", { willReadFrequently: true }),
        bgCanvas: bgCanvasRef.current,
        bgCtx: bgCanvasRef.current.getContext("2d", { willReadFrequently: true }),
        canvasWidth: canvasRef.current.offsetWidth,
        canvasHeight: canvasRef.current.offsetHeight,
        inputImage: inputImageRef.current,
        snapShot:canvasRef.current.getContext("2d" , { willReadFrequently: true }).getImageData(0, 0,canvasRef.current.offsetWidth, canvasRef.current.offsetHeight)
      }
      
      case actionTypes.SET_SNAPSHPT_WITH_CTX_AND_CANVAS_WIDTH_HEIGHT:
        return{
          ...state,
          snapShot: action.payload.snapshot,

        }
  }
}
