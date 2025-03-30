import { faYenSign } from "@fortawesome/free-solid-svg-icons";
import {
  actionTypes,
  drawToolsIds,
  IDS,
  shapsToolsIds,
} from "../assets/constants";
import { addDispatch } from "./helper";

export const getXYWhenTouched = (event) => {
  const boundingClientRect = event.target.getBoundingClientRect();
  let x = event.targetTouches[0].pageX - boundingClientRect.left;
  let y = event.targetTouches[0].pageY - boundingClientRect.top;
  return {
    x,
    y,
  };
};
export const getCurrentCoordinates = (event) => {
  let currentX;
  let currentY;
  if (event.targetTouches) {
    const result = getXYWhenTouched(event);
    currentX = parseInt(result.x);
    currentY = parseInt(result.y);
  } else {
    currentX = parseInt(event.nativeEvent.offsetX);
    currentY = parseInt(event.nativeEvent.offsetY);
  }

  return {
    currentX,
    currentY,
  };
};

export const setSourceOver = (ctx) => {
  ctx.globalCompositeOperation = "source-over"; //for drow
};
export const setDestinationOut = (ctx) => {
  ctx.globalCompositeOperation = "destination-out"; //for eraser
};
export const setColoAndSizeBeforeDrow = (configState, appState) => {
  const { firstPen, secondPen, thirdPen, highlighter, shaps, eraser } =
    appState.tools;
  const { ctx } = configState;
  switch (appState.whitchToolsSelected) {
    case IDS.firstPen:
      ctx.lineWidth = firstPen.size;
      ctx.strokeStyle = firstPen.color;
      ctx.fillStyle = firstPen.color;
      break;
    case IDS.secondPen:
      ctx.lineWidth = secondPen.size;
      ctx.strokeStyle = secondPen.color;
      ctx.fillStyle = secondPen.color;
      break;
    case IDS.thirdPen:
      ctx.lineWidth = thirdPen.size;
      ctx.strokeStyle = thirdPen.color;
      ctx.fillStyle = thirdPen.color;
      break;
    case IDS.highlighter:
      ctx.lineWidth = highlighter.size;
      ctx.strokeStyle = highlighter.color;
      ctx.fillStyle = highlighter.color;
      break;
    case IDS.eraser:
      ctx.lineWidth = eraser.size;
      ctx.strokeStyle = "orange"; //when use highlighter and then use eraser ,eraser get color from highlighter with alpha and
      ctx.fillStyle = "orange"; /// to fix thsi bug just set a color such az evry color
      break;

    case IDS.rectAngle:
    case IDS.straightLine:
    case IDS.triAngle:
    case IDS.circle:
      ctx.lineWidth = shaps.size;
      ctx.strokeStyle = shaps.color;
      ctx.fillStyle = shaps.color;
      break;

    default:
      throw "this is error about setColoAndSizeBeforeDrow";
  }
};

export const drawRectangle = (
  event,
  isFilledShape,
  ctx,
  prevMouseX,
  prevMouseY
) => {
  const { currentX, currentY } = getCurrentCoordinates(event);

  let width = prevMouseX - currentX;
  let height = prevMouseY - currentY;

  isFilledShape
    ? ctx.fillRect(currentX, currentY, width, height)
    : ctx.strokeRect(currentX, currentY, width, height);
};

export const drawCircle = (
  event,
  isFilledShape,
  ctx,
  prevMouseX,
  prevMouseY
) => {
  const { currentX, currentY } = getCurrentCoordinates(event);

  let radius = Math.sqrt(
    Math.pow(prevMouseX - currentX, 2) + Math.pow(prevMouseY - currentY, 2)
  );

  ctx.beginPath();
  ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
  isFilledShape ? ctx.fill() : ctx.stroke();
};

export const drawTriangle = (
  event,
  isFilledShape,
  ctx,
  prevMouseX,
  prevMouseY
) => {
  const { currentX, currentY } = getCurrentCoordinates(event);
  ctx.beginPath();
  ctx.moveTo(prevMouseX, prevMouseY);
  ctx.lineTo(currentX, currentY);
  ctx.lineTo(prevMouseX * 2 - currentX, currentY); //   bottom line
  ctx.closePath();
  isFilledShape ? ctx.fill() : ctx.stroke();
};

export const drawStraightLine = (event, ctx, prevMouseX, prevMouseY) => {
  const { currentX, currentY } = getCurrentCoordinates(event);
  ctx.beginPath();
  ctx.moveTo(prevMouseX, prevMouseY);
  ctx.lineTo(currentX, currentY);
  ctx.stroke();
};

export const drawFreeHandLine = (event, ctx, prevMouseCoordsRef) => {
  const { currentX, currentY } = getCurrentCoordinates(event);
  ctx.moveTo(prevMouseCoordsRef.current.x, prevMouseCoordsRef.current.y);
  ctx.lineTo(currentX, currentY);
  ctx.stroke();
  prevMouseCoordsRef.current = { x: currentX, y: currentY };
};

export const drawLineWithHighlighter = (event, ctx, prevMouseX, prevMouseY) => {
  const { currentX, currentY } = getCurrentCoordinates(event);
  ctx.strokeStyle = ctx.strokeStyle + 80;
  ctx.beginPath();
  ctx.moveTo(prevMouseX, prevMouseY);
  ctx.lineTo(currentX, currentY);
  ctx.stroke();
};

export const startLeftClickOnCanvas = (
  event,
  configState,
  dispatchConfigState,
  appState,
  appDispatch,
  prevMouseCoordsRef
) => {
  if (drawToolsIds.includes(appState.whitchToolsSelected)) {
    configState.ctx.beginPath(); // //use this just for handel drawFreeHandLine
    addDispatch(appDispatch, actionTypes.SET_IS_DRAWING_TRUE);
    const { currentX, currentY } = getCurrentCoordinates(event);

    prevMouseCoordsRef.current = { x: currentX, y: currentY };

    addDispatch(appDispatch, actionTypes.SET_MOUSE_DOWN_POSITION, {
      coordinates: { x: currentX, y: currentY },
    });
    const snapshot = configState.ctx.getImageData(
      0,
      0,
      configState.canvasWidth,
      configState.canvasHeight
    );
    addDispatch(
      dispatchConfigState,
      actionTypes.SET_SNAPSHPT_WITH_CTX_AND_CANVAS_WIDTH_HEIGHT,
      { snapshot }
    );
  }
};

export const movingPointerOnCanvas = (
  event,
  appState,
  configState,
  prevMouseCoordsRef
) => {
  const { ctx, snapShot } = configState;
  const { isDrawing, whitchToolsSelected } = appState;
  const { isFilledShape } = appState.tools.shaps;
  if (!ctx) return;
  if (isDrawing) {
    whitchToolsSelected === IDS.eraser
      ? setDestinationOut(ctx)
      : setSourceOver(ctx);
    ctx.putImageData(snapShot, 0, 0);
    const generatedWhitchToolsSelected = shapsToolsIds.includes(
      whitchToolsSelected
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
        drawFreeHandLine(event, ctx, prevMouseCoordsRef, appState);
        break;
      case IDS.straightLine:
        drawStraightLine(event, ctx, prevMouseX, prevMouseY);
        break;
      case IDS.circle:
        drawCircle(event, isFilledShape, ctx, prevMouseX, prevMouseY);
        break;
      case IDS.rectAngle:
        drawRectangle(event, isFilledShape, ctx, prevMouseX, prevMouseY);
        break;
      case IDS.triAngle:
        drawTriangle(event, isFilledShape, ctx, prevMouseX, prevMouseY);
        break;
      case IDS.highlighter:
        drawLineWithHighlighter(event, ctx, prevMouseX, prevMouseY);
        break;
      case IDS.eraser:
        drawFreeHandLine(event, ctx, prevMouseCoordsRef, appState);
        break;
      default:
        console.log("Do Not select tools");
    }
  }
};

export const mouseUpHandler = (event, appDispatch) => {
  const { currentX, currentY } = getCurrentCoordinates(event);
  addDispatch(appDispatch, actionTypes.SET_IS_DRAWING_FALSE);
  addDispatch(appDispatch, actionTypes.SET_MOUSE_UP_POSITION, {
    coordinates: {
      x: currentX,
      y: currentY,
    },
  });
};

const gridXFixing = (size, configState) => {
  const { bgCtx, canvasWidth, canvasHeight } = configState;
  console.log(canvasHeight);
  // console.log(canvasWidth);
  let num = +size;
  bgCtx.lineWidth = 1;
  bgCtx.strokeStyle = "rgba(128, 128, 128, 0.281)";
  const rectangle = new Path2D();
  for (let i = 0; i < canvasHeight; i += num) {
    rectangle.rect(0, i, canvasWidth, num);
  }
  bgCtx.stroke(rectangle);
};

const gridYFixing = (size, configState) => {
  const { bgCtx, canvasWidth, canvasHeight } = configState;
  let num = +size;
  bgCtx.lineWidth = 1;
  bgCtx.strokeStyle = "rgba(128, 128, 128, 0.281)";
  const rectangle = new Path2D();
  for (let i = 0; i < canvasWidth; i += num) {
    rectangle.rect(i, 0, num, canvasHeight);
  }
  bgCtx.stroke(rectangle);
};
const gridXYFixing = (size, configState) => {
  gridXFixing(size, configState);
  gridYFixing(size, configState);
};
const clearGrid = (configState) => {
  const { bgCtx, canvasWidth, canvasHeight } = configState;
  bgCtx.clearRect(0, 0, canvasWidth, canvasHeight);
};
export const gridHandlelr = (size, dataTask, configState) => {
  const { bgCtx  , canvasWidth , canvasHeight } = configState;
  bgCtx.clearRect(0, 0, canvasWidth, canvasHeight);
  dataTask === IDS.xGrid && gridXFixing(size, configState);
  dataTask === IDS.yGrid && gridYFixing(size, configState);
  dataTask === IDS.xyGrid && gridXYFixing(size, configState);
  dataTask === IDS.withoutGrid && clearGrid(configState);
};
export const saveImageHandler = (configState) => {
  const link = document.createElement('a') 
  link.download = `${Date.now()}.jpg`
  link.href = configState.canvas.toDataURL()
  link.click() 
}