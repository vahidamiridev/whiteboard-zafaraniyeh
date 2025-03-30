import { actionTypes, shapsToolsIds } from "../assets/constants";

export const appInitialState = {
  isDrawing: false,
  whitchToolsSelected: "",
  tools: {
    firstPen: {
      color: "black",
      size: 3,
      isActive: true,
      mouseDownPosition: {
        x: 0,
        y: 0,
      },
      mouseUpPosition: {
        x: 0,
        y: 0,
      },
    },
    secondPen: {
      color: "red",
      size: 3,
      isActive: false,
      mouseDownPosition: {
        x: 0,
        y: 0,
      },
      mouseUpPosition: {
        x: 0,
        y: 0,
      },
    },
    thirdPen: {
      color: "green",
      size: 3,
      isActive: false,
      mouseDownPosition: {
        x: 0,
        y: 0,
      },
      mouseUpPosition: {
        x: 0,
        y: 0,
      },
    },

    highlighter: {
      color: "gold",
      size: 25,
      isActive: false,
      mouseDownPosition: {
        x: 0,
        y: 0,
      },
      mouseUpPosition: {
        x: 0,
        y: 0,
      },
    },
    eraser: {
      size: 3,
      isActive: false,
      mouseDownPosition: {
        x: 0,
        y: 0,
      },
      mouseUpPosition: {
        x: 0,
        y: 0,
      },
    },
    shaps: {
      color: "blue",
      size: 3,
      isActive: false,
      isFilledShape: false,
      mouseDownPosition: {
        x: 0,
        y: 0,
      },
      mouseUpPosition: {
        x: 0,
        y: 0,
      },
    },
    backgroundCanvas: {
      color: "darkGreen",
      size: 30,
      isActive: false,
    },
  },
  moveImage: {
    image: [],
    isActive: false,
    isLoading: false,
    mouseDownPosition: {
      x: 0,
      y: 0,
    },
    mouseUpPosition: {
      x: 0,
      y: 0,
    },
  },
  insertImage: {
    isActive: false,
  },
  saveImage: {
    isActive: false,
  },
};

export default function appReducer(state, action) {
  const toolId = action.payload.id?.split("-")[0];
  let generatedWhitchToolsSelected = shapsToolsIds.includes(
    state.whitchToolsSelected
  )
    ? "shaps"
    : state.whitchToolsSelected;
  let updatedTool;
  switch (action.type) {
    case actionTypes.SET_COLOR_WITH_ID:
      console.log("SET_COLOR_WITH_ID");
      if (!state.tools[toolId]) {
        return state;
      }
      updatedTool = {
        ...state.tools[toolId],
        color: action.payload.color,
      };
      return {
        ...state,
        whitchToolsSelected:
          toolId === "shaps" || toolId === "backgroundCanvas"
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
        size: action.payload.size,
      };
      return {
        ...state,
        whitchToolsSelected:
          toolId === "shaps" || toolId === "backgroundCanvas"
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
            isFilledShape: action.payload.isFilledShape,
          },
        },
      };

    case actionTypes.SET_MOUSE_DOWN_POSITION:
      console.log("SET_MOUSE_DOWN_POSITION");

      return {
        ...state,
        tools: {
          ...state.tools,
          [generatedWhitchToolsSelected]: {
            ...state.tools[generatedWhitchToolsSelected],
            mouseDownPosition: {
              x: action.payload.coordinates.x,
              y: action.payload.coordinates.y,
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
              x: action.payload.coordinates.x,
              y: action.payload.coordinates.y,
            },
          },
        },
      };

    case actionTypes.SET_WHITCH_TOOLS_SELECTED_WITH_ID:
      console.log("SET_WHITCH_TOOLS_SELECTED_WITH_ID");
      return {
        ...state,
        whitchToolsSelected:
          toolId === "shaps" || toolId === "backgroundCanvas"
            ? action.payload.id.split("-")[2]
            : toolId,
      };

    case actionTypes.SET_IS_DRAWING_TRUE:
      console.log("SET_IS_DRAWING_TRUE");
      return {
        ...state,
        isDrawing: true,
      };
    case actionTypes.SET_IS_DRAWING_FALSE:
      console.log("SET_IS_DRAWING_FALSE");
      return {
        ...state,
        isDrawing: false,
      };

    default:
      return state;
  }
}

// export const appInitialState = {
//   firstColor: "black",
//   secondColor: "green",
//   thirdColor: "red",
//   highlighterColor: "gold",
//   shapsColor: "green",
//   backgroundColor: "#e3e3e3",

//   firstPenSize: 3,
//   secondPenSize: 3,
//   thirdPenSize: 3,
//   highlightersSize: 3,
//   shapsSize:3,
//   eraserSize: 3,
//   grideSize: 3,
//   isDrawing:false,

//   whitchToolsSelected: "firstPen",
//   isFilledShape: false,

//   image: [],
//   isLoading: false,

//   prevMouseX: 0,
//   prevMouseY: 0,

// }

//  switch (action.type) {
//    case actionTypes.SET_COLOR_WITH_ID:
// return {
//   ...state,
//   firstColor:
//     action.payload.id.includes() === IDS.firstPen
//       ? action.payload.color
//       : state.firstColor,
//   secondColor:
//     action.payload.id.includes() === IDS.secondPen
//       ? action.payload.color
//       : state.secondColor,
//   thirdColor:
//     action.payload.id.includes() === IDS.thirdPen
//       ? action.payload.color
//       : state.thirdColor,
//   highlighterColor:
//     action.payload.id.includes() === IDS.highlighter
//       ? action.payload.color
//       : state.highlighterColor,
//   shapsColor:
//     action.payload.id.includes() === IDS.shaps
//       ? action.payload.color
//       : state.shapsColor,
//   backgroundColor:
//     action.payload.id.includes() === IDS.backgroundCanvas
//       ? action.payload.color
//       : state.backgroundColor,
// };
//    case actionTypes.SET_SIZE_WITH_ID:
// return {
//   ...state,
//   firstPenSize:
//     action.payload.id.includes() === IDS.firstPen
//       ? action.payload.size
//       : state.firstPenSize,
//   secondPenSize:
//     action.payload.id.includes() === IDS.secondPen
//       ? action.payload.size
//       : state.secondPenSize,
//   thirdPenSize:
//     action.payload.id.includes() === IDS.thirdPen
//       ? action.payload.size
//       : state.thirdPenSize,
//   highlightersSize:
//     action.payload.id.includes() === IDS.highlighter
//       ? action.payload.size
//       : state.highlightersSize,
//   eraserSize:
//     action.payload.id.includes() === IDS.eraser
//       ? action.payload.size
//       : state.eraserSize,
//   shapsSize:
//     action.payload.id.includes() === IDS.shaps
//       ? action.payload.size
//       : state.eraserSize,
//   grideSize:
//     action.payload.id.includes() === IDS.backgroundCanvas
//       ? action.payload.size
//       : state.grideSize,
// };
// return {
//   ...state,
//   prevMouseX: action.payload.coordinates.currentX,
//   prevMouseY: action.payload.coordinates.currentY,
// };
// case actionTypes.SET_IS_DRAWING_TRUE:
//   return {
//     ...state,
//     isDrawing: true,
//   };
// case actionTypes.SET_IS_DRAWING_FALSE:
//   return {
//     ...state,
//     isDrawing: false,
//   };

// }
