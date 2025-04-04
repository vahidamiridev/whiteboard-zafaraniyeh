import {  AppActions, AppState, ShapsToolType, Tool } from "interfaces";
import { actionTypes, IDS, shapsToolsIds } from "../assets/constants";


export const appInitialState: AppState = {
  isDrawing: false,
  whitchToolsSelected: "firstPen",
  tools: {
    firstPen: {
      color: "black",
      size: 3,
      isActive: true,
      mouseDownPosition: { x: 0, y: 0 },
      mouseUpPosition: { x: 0, y: 0 },
    },
    secondPen: {
      color: "red",
      size: 3,
      isActive: false,
      mouseDownPosition: { x: 0, y: 0 },
      mouseUpPosition: { x: 0, y: 0 },
    },
    thirdPen: {
      color: "green",
      size: 3,
      isActive: false,
      mouseDownPosition: { x: 0, y: 0 },
      mouseUpPosition: { x: 0, y: 0 },
    },
    highlighter: {
      color: "gold",
      size: 25,
      isActive: false,
      mouseDownPosition: { x: 0, y: 0 },
      mouseUpPosition: { x: 0, y: 0 },
    },
    eraser: {
      size: 3,
      isActive: false,
      mouseDownPosition: { x: 0, y: 0 },
      mouseUpPosition: { x: 0, y: 0 },
    },
    shaps: {
      color: "blue",
      size: 3,
      isActive: false,
      isFilledShape: false,
      mouseDownPosition: { x: 0, y: 0 },
      mouseUpPosition: { x: 0, y: 0 },
    },
    backgroundCanvas: {
      color: "#556b2f",
      size: "30",
      isActive: false,
    },
  },
  undo: {
    imageData: [],
    isActive: false,
  },
  refresh: {
    isActive: false,
  },
  saveImage: {
    isActive: false,
  },
};

export default function appReducer(state: AppState, action: AppActions): AppState {



let generatedWhitchToolsSelected: keyof typeof IDS 



if(action.payload && action.payload.id){
  let toolId: keyof typeof IDS = action.payload.id.split("-")[0] as keyof typeof IDS;
  let updatedTool: Tool;

  switch (action.type) {
    case actionTypes.SET_COLOR_WITH_ID:
      console.log("SET_COLOR_WITH_ID");
      if (!state.tools[toolId]) {
        return state;
      }
      updatedTool = {
        ...state.tools[toolId],
        color: action.payload?.color!,  
      };
      return {
        ...state,
        whitchToolsSelected: toolId === IDS.shaps || toolId === IDS.backgroundCanvas
          ? state.whitchToolsSelected
          : toolId,
        tools: {
          ...state.tools,
          [toolId]: updatedTool,
        },
      };

    case actionTypes.SET_SIZE_WITH_ID:
      console.log("SET_SIZE_WITH_ID");
      updatedTool = {
        ...state.tools[toolId],
        size: action.payload?.size!,
      };
      return {
        ...state,
        whitchToolsSelected: toolId === IDS.shaps || toolId === IDS.backgroundCanvas
          ? state.whitchToolsSelected
          : toolId,
        tools: {
          ...state.tools,
          [toolId]: updatedTool,
        },
      };

    case actionTypes.SET_SHAPE_FILL_STATUS:
      console.log("SET_SHAPE_FILL_STATUS");
      return {
        ...state,
        tools: {
          ...state.tools,
          [toolId]: {
            ...state.tools[toolId],
            isFilledShape: action.payload?.isFilledShape!, 
          },
        },
      };



    case actionTypes.SET_WHITCH_TOOLS_SELECTED_WITH_ID:

      console.log("SET_WHITCH_TOOLS_SELECTED_WITH_ID");
      return {
        ...state,
        whitchToolsSelected: toolId === IDS.shaps || toolId === IDS.backgroundCanvas
          ? action.payload?.id?.split("-")[2] as keyof typeof IDS
          : toolId,
      };
    default:
      return state;
  }
}else{
  generatedWhitchToolsSelected = shapsToolsIds.includes(state.whitchToolsSelected as ShapsToolType)
  ? IDS.shaps  
  : state.whitchToolsSelected; 

  switch (action.type) {
  
  case actionTypes.SET_IS_DRAWING_TRUE:
    console.log("SET_IS_DRAWING_TRUE");
    return {
      ...state,
      isDrawing: true,
    }

  case actionTypes.SET_IS_DRAWING_FALSE:
    console.log("SET_IS_DRAWING_FALSE");
    return {
      ...state,
      isDrawing: false,
    }
    case actionTypes.SET_MOUSE_DOWN_POSITION:
      console.log("SET_MOUSE_DOWN_POSITION");
      return {
        ...state,
        tools: {
          ...state.tools,
          [generatedWhitchToolsSelected]: {
            ...state.tools[generatedWhitchToolsSelected],
            mouseDownPosition: {
              x: action.payload?.coordinates?.x,  
              y: action.payload?.coordinates?.y,  
            },
          },
        },
      };

    case actionTypes.SET_MOUSE_UP_POSITION:
      console.log("SET_MOUSE_UP_POSITION");
      return {
        ...state,
        tools: {
          ...state.tools,
          [generatedWhitchToolsSelected]: {
            ...state.tools[generatedWhitchToolsSelected],
            mouseUpPosition: {
              x: action.payload?.coordinates?.x,  
              y: action.payload?.coordinates?.y, 
            },
          },
        },
      };

  default:
    return state;
}
}
}
