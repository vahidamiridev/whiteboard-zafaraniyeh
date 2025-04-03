import { AppActions, AppState, ConfigAction, ConfigState } from "interfaces";

export type MouseOrTouchEvent =React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>

export type CanvasContext = CanvasRenderingContext2D;

export interface MouseCoords {
  x: number;
  y: number;
}

export interface MouseEventWithCoords {
  event: MouseOrTouchEvent;
  ctx: CanvasContext;
  prevMouseX: number;
  prevMouseY: number;
}

export interface DrawingEvent {
  event: MouseOrTouchEvent;
  isFilledShape: boolean |undefined;
  ctx: CanvasRenderingContext2D;
  prevMouseX: number;
  prevMouseY: number;
}

export interface MouseCoordsRefEvent {
  event: MouseOrTouchEvent;
  ctx: CanvasContext;
  prevMouseCoordsRef: React.RefObject<MouseCoords>;
}


  