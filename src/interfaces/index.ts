import { actionTypes, IDS, shapsToolsIds } from "assets/constants";



export type ActionType =
  | { 
      type: typeof actionTypes.INITIAL_CONFIG_STATES; 
      payload: { 
        canvasRef: React.RefObject<HTMLCanvasElement>; 
        bgCanvasRef: React.RefObject<HTMLCanvasElement>; 
        inputImageRef: React.RefObject<HTMLImageElement>; 
      } 
    }
  | { 
      type: typeof actionTypes.SET_SNAPSHPT_WITH_CTX_AND_CANVAS_WIDTH_HEIGHT; 
      payload: { snapshot: ImageData } 
    };


export interface AppInitialStateContextType {
  canvas: HTMLCanvasElement | null;
  ctx: CanvasRenderingContext2D | null;
  bgCanvas: HTMLCanvasElement | null;
  bgCtx: CanvasRenderingContext2D | null;
  inputImage: HTMLImageElement | null;
  canvasWidth: string;
  canvasHeight: string;
  snapShot: ImageData | Record<string, unknown>;
}



//-----------------------------------------------------------------------------------------------
// اینترفیس برای موقعیت (Position)
export interface Position {
  x: number | string;
  y: number | string;
}

// اینترفیس برای هر ابزار (Tool)
export interface Tool {
  color: string;
  size: number;
  isActive: boolean;
  isFilledShape?: boolean;
  mouseDownPosition: Position;
  mouseUpPosition: Position;
}

// اینترفیس برای وضعیت ابزارها (ToolsState)
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
    size: number;
    isActive: boolean;
  };
}

// اینترفیس برای وضعیت تصویر (ImageState)
export interface ImageState {
  image: any[]; // نوع تصویر باید بر اساس نیاز تغییر کند
  isActive: boolean;
  isLoading: boolean;
  mouseDownPosition: Position;
  mouseUpPosition: Position;
}

export type WhitchToolsSelectedType = keyof typeof IDS

export type ShapsToolType = typeof shapsToolsIds[number];

export interface AppInitialState {
  isDrawing: boolean;
  whitchToolsSelected:WhitchToolsSelectedType; 
  tools: ToolsState;
  moveImage: ImageState;
  insertImage: {
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
    color?: string;
    size?: number | string;
    coordinates?: Position;
    isFilledShape?: boolean;
  }
}
