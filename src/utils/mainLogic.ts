import React from "react";
import { actionTypes, drawToolsIds, IDS, shapsToolsIds, } from "../assets/constants";
import { addDispatch } from "./helper";
import { AppState, ConfigState } from "interfaces";
import { DrawingEvent, MouseCoordsRefEvent, MouseEventWithCoords } from "interfaces/mainLogicTyps";
import { BaseMouse, ClickStart, MouseUp } from "interfaces/mouseLogicTyps";

const hexToRgba = (hex: string, alpha: number): string => {
  // اگر کد رنگ با # شروع نشد، # را به ابتدای آن اضافه می‌کنیم
  if (hex.startsWith('#')) {
    hex = hex.slice(1);
  }

  // اگر طول کد رنگ برابر با 3 است، رنگ کوتاه است. پس باید آن را گسترش دهیم
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }

  // تبدیل کد رنگ به مقادیر RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // بازگشت رنگ به فرمت rgba با مقدار الفا
  return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`; // تبدیل 80 به 0.8 برای الفا
};



export const getXYWhenTouched = (event: TouchEvent): { x: number, y: number } => {
  let x = 0;
  let y = 0;

  if (event.targetTouches && event.targetTouches[0] &&  event.targetTouches.length > 0) {
    const boundingClientRect = (event.target as HTMLElement).getBoundingClientRect();
    x = event.targetTouches[0].pageX - boundingClientRect.left;
    y = event.targetTouches[0].pageY - boundingClientRect.top;
  }
  else if (event.changedTouches && event.changedTouches[0] &&  event.changedTouches.length > 0) {
    const boundingClientRect = (event.target as HTMLElement).getBoundingClientRect();
    x = event.changedTouches[0].pageX - boundingClientRect.left;
    y = event.changedTouches[0].pageY - boundingClientRect.top;
  } else {
    console.error('No touch detected.');
  }

  return { x, y };
};


export const getCurrentCoordinates = (event: React.MouseEvent | React.TouchEvent): { currentX: number, currentY: number }  => {
  let currentX: number;
  let currentY: number;

  const nativeEvent = event.nativeEvent;
  if (nativeEvent instanceof TouchEvent) {
    const touchEvent = event.nativeEvent as TouchEvent;
    const result = getXYWhenTouched(touchEvent);
    currentX = result.x;
    currentY = result.y;
  } 
  else {
    const mouseEvent = event.nativeEvent as MouseEvent;
    currentX = mouseEvent.offsetX;  
    currentY = mouseEvent.offsetY;  
  }

  return {
    currentX,
    currentY,
  };
};


export const setSourceOver = (ctx:CanvasRenderingContext2D): void => {
  ctx.globalCompositeOperation = "source-over"; //for drow
}
export const setDestinationOut = (ctx:CanvasRenderingContext2D) :void=> {
  ctx.globalCompositeOperation = "destination-out"; //for eraser
};
export const setColoAndSizeBeforeDrow = (configState: ConfigState, appState: AppState): void => {
  const { tools } = appState;
  const { ctx } = configState;

  if (ctx) {
    const toolSettings = {
      [IDS.firstPen]: tools.firstPen,
      [IDS.secondPen]: tools.secondPen,
      [IDS.thirdPen]: tools.thirdPen,
      [IDS.highlighter]: tools.highlighter,
      [IDS.eraser]: { size: tools.eraser.size, color: "orange" }, // Eraser has fixed color
      [IDS.rectAngle]: tools.shaps,
      [IDS.straightLine]: tools.shaps,
      [IDS.triAngle]: tools.shaps,
      [IDS.circle]: tools.shaps,
    };

    const selectedTool = toolSettings[appState.whitchToolsSelected];

    if (selectedTool) {
      ctx.lineWidth = selectedTool.size;
      ctx.strokeStyle = selectedTool.color;
      ctx.fillStyle = selectedTool.color;
    } else {
      throw new Error("Invalid tool selected in setColoAndSizeBeforeDrow");
    }
  }
};




export const drawRectangle = ( { event, isFilledShape, ctx, prevMouseX , prevMouseY  }:DrawingEvent ): void => {
  const { currentX, currentY } = getCurrentCoordinates(event);

  let width = prevMouseX - currentX;
  let height = prevMouseY - currentY;

  isFilledShape !== undefined && isFilledShape
    ? ctx.fillRect(currentX, currentY, width, height)
    : ctx.strokeRect(currentX, currentY, width, height);
};


export const drawCircle = ( { event, isFilledShape, ctx, prevMouseX , prevMouseY  }:DrawingEvent ): void => {
  const { currentX, currentY } = getCurrentCoordinates(event);

  let radius = Math.sqrt(
    Math.pow(prevMouseX - currentX, 2) + Math.pow(prevMouseY - currentY, 2)
  );

  ctx.beginPath();
  ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
  isFilledShape !== undefined  && isFilledShape ? ctx.fill() : ctx.stroke();
};

export const drawTriangle = ( { event, isFilledShape, ctx, prevMouseX , prevMouseY  }:DrawingEvent ): void => {
  const { currentX, currentY } = getCurrentCoordinates(event);
  ctx.beginPath();
  ctx.moveTo(prevMouseX, prevMouseY);
  ctx.lineTo(currentX, currentY);
  ctx.lineTo(prevMouseX * 2 - currentX, currentY); //   bottom line
  ctx.closePath();
  isFilledShape !== undefined  && isFilledShape ? ctx.fill() : ctx.stroke();
};

export const drawStraightLine= ( { event, ctx, prevMouseX , prevMouseY  }:MouseEventWithCoords ): void => {
  const { currentX, currentY } = getCurrentCoordinates(event);
  ctx.beginPath();
  ctx.moveTo(prevMouseX, prevMouseY);
  ctx.lineTo(currentX, currentY);
  ctx.stroke();
};

export const drawFreeHandLine = ({event, ctx, prevMouseCoordsRef}:MouseCoordsRefEvent):void => {
  const { currentX, currentY } = getCurrentCoordinates(event);
  ctx.moveTo(prevMouseCoordsRef.current.x, prevMouseCoordsRef.current.y);
  ctx.lineTo(currentX, currentY);
  ctx.stroke();
  prevMouseCoordsRef.current = { x: currentX, y: currentY };
};

export const drawLineWithHighlighter = (
  { event, ctx, prevMouseX, prevMouseY }: MouseEventWithCoords
): void => {
  const { currentX, currentY } = getCurrentCoordinates(event);
    if(typeof ctx.strokeStyle === "string" )
  ctx.strokeStyle = hexToRgba(ctx.strokeStyle, 80);

  ctx.beginPath();
  ctx.moveTo(prevMouseX, prevMouseY);
  ctx.lineTo(currentX, currentY);
  ctx.stroke();
};




export const startLeftClickOnCanvas = (
{ event,
  appState,
  configState,
  prevMouseCoordsRef,
  dispatchConfigState,
  appDispatch}:ClickStart
):void => {
  if (drawToolsIds.includes(appState.whitchToolsSelected as typeof drawToolsIds[number]) && configState.ctx) {
    configState.ctx.beginPath(); // just for handel drawFreeHandLine
    addDispatch(appDispatch, actionTypes.SET_IS_DRAWING_TRUE  );
    const { currentX, currentY } = getCurrentCoordinates(event);

    prevMouseCoordsRef.current = { x: currentX, y: currentY };

    addDispatch(appDispatch, actionTypes.SET_MOUSE_DOWN_POSITION, {
      coordinates: { x: currentX, y: currentY },
    });
    const snapshot = configState.ctx.getImageData(
      0,
      0,
      +configState.canvasWidth,
      +configState.canvasHeight
    );
    addDispatch(
      dispatchConfigState,
      actionTypes.SET_SNAPSHPT_WITH_CTX_AND_CANVAS_WIDTH_HEIGHT,
      { snapshot }
    );
  }else{
    throw new Error("whitchToolsSelected is not included member of drawToolsIds or configStat is not exist") 
  }
};


export const movingPointerOnCanvas = (
{  event,
  appState,
  configState,
  prevMouseCoordsRef}:BaseMouse
) => {
  const { ctx, snapShot } = configState;
  const { isDrawing, whitchToolsSelected } = appState;
  const { isFilledShape } = appState.tools.shaps;
  if (!ctx) return;
  if (isDrawing && ctx) {
    whitchToolsSelected === IDS.eraser
      ? setDestinationOut(ctx)
      : setSourceOver(ctx);
    ctx.putImageData(snapShot as ImageData, 0, 0);
    const generatedWhitchToolsSelected = shapsToolsIds.includes(
      whitchToolsSelected as typeof shapsToolsIds[number]
    )
      ? "shaps"
      : whitchToolsSelected;
    const prevMouseX =
      appState.tools[generatedWhitchToolsSelected].mouseDownPosition.x;
    const prevMouseY =
      appState.tools[generatedWhitchToolsSelected].mouseDownPosition.y;

    setColoAndSizeBeforeDrow(configState, appState);

    switch (whitchToolsSelected) {
      case IDS.firstPen:
      case IDS.secondPen:
      case IDS.thirdPen:
        drawFreeHandLine({event, ctx, prevMouseCoordsRef});
        break;
      case IDS.straightLine:
        drawStraightLine({event, ctx, prevMouseX, prevMouseY});
        break;
      case IDS.circle:
        drawCircle({event, isFilledShape, ctx, prevMouseX, prevMouseY});
        break;
      case IDS.rectAngle:
        drawRectangle({event, isFilledShape, ctx, prevMouseX, prevMouseY});
        break;
      case IDS.triAngle:
        drawTriangle({event, isFilledShape, ctx, prevMouseX, prevMouseY});
        break;
      case IDS.highlighter:
        drawLineWithHighlighter({event, ctx, prevMouseX, prevMouseY});
        break;
      case IDS.eraser:
        drawFreeHandLine({event, ctx, prevMouseCoordsRef});
        break;
      default:
        console.log("Do Not select tools");
    }
  }
};

export const mouseUpHandler = ({event, appDispatch}:MouseUp) => {
  

  const { currentX, currentY } = getCurrentCoordinates(event);
  addDispatch(appDispatch, actionTypes.SET_IS_DRAWING_FALSE);
  addDispatch(appDispatch, actionTypes.SET_MOUSE_UP_POSITION, {
    coordinates: {
      x: currentX,
      y: currentY,
    },
  });
};

const gridXFixing = (size: string, configState :ConfigState) => {
  const { bgCtx, canvasWidth, canvasHeight } = configState;
    if(bgCtx){
      let num = +size;
      bgCtx.lineWidth = 1;
      bgCtx.strokeStyle = "rgba(128, 128, 128, 0.281)";
      const rectangle = new Path2D();
      for (let i = 0; i < +canvasHeight; i += num) {
        rectangle.rect(0, i, +canvasWidth, num);
      }
      bgCtx.stroke(rectangle);
    }
};

const gridYFixing = (size: string, configState :ConfigState) => {
  const { bgCtx, canvasWidth, canvasHeight } = configState;
    if(bgCtx){
      let num = +size;
      bgCtx.lineWidth = 1;
      bgCtx.strokeStyle = "rgba(128, 128, 128, 0.281)";
      const rectangle = new Path2D();
      for (let i = 0; i < +canvasWidth; i += num) {
        rectangle.rect(i, 0, num, +canvasHeight);
      }
      bgCtx.stroke(rectangle);
    }
};
const gridXYFixing = (size: string, configState :ConfigState) => {
  gridXFixing(size, configState);
  gridYFixing(size, configState);
};
const clearGrid = (configState : ConfigState) => {
  const { bgCtx, canvasWidth, canvasHeight } = configState;
  bgCtx?.clearRect(0, 0, +canvasWidth, +canvasHeight);
};
export const gridHandlelr = (size : string, appState:AppState, configState:ConfigState) => {
  console.log("gridHandlelr");
  const { bgCtx  , canvasWidth , canvasHeight } = configState;
  bgCtx?.clearRect(0, 0, +canvasWidth, +canvasHeight);
  appState.whitchToolsSelected === IDS.xGrid && gridXFixing(size, configState);
  appState.whitchToolsSelected === IDS.yGrid && gridYFixing(size, configState);
  appState.whitchToolsSelected === IDS.xyGrid && gridXYFixing(size, configState);
  appState.whitchToolsSelected === IDS.withoutGrid && clearGrid(configState);
  
  
};
export const saveImageHandler = (configState:ConfigState) => {
  const link = document.createElement('a') 
  link.download = `${Date.now()}.jpg`
const dataUrl = configState?.canvas?.toDataURL()
if(dataUrl){

  link.href = dataUrl
  link.click() 
}   else {
  console.error("Canvas is not available or toDataURL() failed- Save failed ");
}
}


export const undoHandler= (appState:AppState , configStat:ConfigState):void=>{

}