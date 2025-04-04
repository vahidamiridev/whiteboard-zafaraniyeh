import { actionTypes, IDS, shapsToolsIds } from "assets/constants";



export type ConfigAction =
  | { 
      type: typeof actionTypes.INITIAL_CONFIG_STATES; 
      payload: { 
        canvasRef: React.RefObject<HTMLCanvasElement >; 
        bgCanvasRef: React.RefObject<HTMLCanvasElement >; 
        inputImageRef: React.RefObject<HTMLInputElement >; 
      } 
    }
 export interface SnapShotAction{ 
      type: typeof actionTypes.SET_SNAPSHPT_WITH_CTX_AND_CANVAS_WIDTH_HEIGHT; 
      payload: { snapshot: ImageData } 
    };


export interface ConfigState {
  canvas: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;
  bgCanvas: HTMLCanvasElement | null;
  bgCtx: CanvasRenderingContext2D | null;
  inputImage: HTMLInputElement | null;
  canvasWidth: string;
  canvasHeight: string;
  snapShot: ImageData | Record<string, unknown>;
}

///////////////////////////////////////////////////////////////////////////////

export interface Position {
  x: number | string;
  y: number | string;
}

export interface Tool {
  color: string;
  size: number;
  isActive: boolean;
  isFilledShape?: boolean;
  mouseDownPosition: Position;
  mouseUpPosition: Position;
}

export interface ToolsState {
  firstPen: Tool;
  secondPen: Tool;
  thirdPen: Tool;
  highlighter: Tool;
  eraser: {
    size: number;
    isActive: boolean;
    mouseDownPosition: Position;
    mouseUpPosition: Position;
  };
  shaps: Tool;
  backgroundCanvas: {
    color: string;
    size: string;
    isActive: boolean;
  };
}

export interface Undo {
  imageData: ImageData[];
  isActive: boolean;

}

export type WhitchToolsSelectedType = keyof typeof IDS

export type ShapsToolType = typeof shapsToolsIds[number];

export interface AppState {
  isDrawing: boolean;
  whitchToolsSelected:WhitchToolsSelectedType; 
  tools: ToolsState;
  undo: Undo;
  refresh: {
    isActive: boolean;
  };
  saveImage: {
    isActive: boolean;
  };
}


export interface AppActions {
  type: keyof typeof actionTypes; 
  payload?: {
    id?: string;
    color?: string ;
    size?:  string;
    coordinates?: Position;
    isFilledShape?: boolean;
  }
}


export interface AppActions {
    event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>,
    isFilledShape: boolean, 
    ctx: CanvasRenderingContext2D,  
    prevMouseX: number,             
    prevMouseY: number  
}

export type CursorIds = "firstPen" | "secondPen" | "thirdPen" | "highlighter" | "eraser"


