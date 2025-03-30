export const actionTypes = {
  INITIAL_CONFIG_STATES: "INITIAL_CONFIG_STATES",
  SET_COLOR_WITH_ID: "SET_COLOR_WITH_ID",
  SET_SIZE_WITH_ID: "SET_SIZE_WITH_ID",
  SET_SHAPE_FILL_STATUS: "SET_SHAPE_FILL_STATUS",
  SET_MOUSE_DOWN_POSITION: "SET_MOUSE_DOWN_POSITION",
  SET_MOUSE_UP_POSITION: "SET_MOUSE_UP_POSITION",
  SET_SNAPSHPT_WITH_CTX_AND_CANVAS_WIDTH_HEIGHT:
    "SET_SNAPSHPT_WITH_CTX_AND_CANVAS_WIDTH_HEIGHT",
  SET_WHITCH_TOOLS_SELECTED_WITH_ID: "SET_WHITCH_TOOLS_SELECTED_WITH_ID",
  SET_IS_DRAWING_FALSE: "SET_IS_DRAWING_FALSE",
  SET_IS_DRAWING_TRUE: "SET_IS_DRAWING_TRUE",
};

export const IDS = {
  firstPen: "firstPen",
  secondPen: "secondPen",
  thirdPen: "thirdPen",
  highlighter: "highlighter",
  eraser: "eraser",
  shaps: "shaps",
  straightLine: "straightLine",
  circle: "circle",
  triAngle: "triangle",
  rectAngle: "rectAngle",
  backgroundCanvas: "backgroundCanvas",
  xGrid: "xGrid",
  yGrid: "yGrid",
  xyGrid: "xyGrid",
  withoutGrid: "withoutGrid",
  moveImage: "moveImage",
  insertImage: "insertImage",
  saveImage: "saveCanvas",
};

export const drawToolsIds = [
  IDS.firstPen,
  IDS.secondPen,
  IDS.thirdPen,
  IDS.highlighter,
  IDS.shaps,
  IDS.backgroundCanvas,
  IDS.eraser,
  IDS.straightLine,
  IDS.circle,
  IDS.triAngle,
  IDS.rectAngle,
]
export const shapsToolsIds = [
  IDS.straightLine,
  IDS.circle,
  IDS.triAngle,
  IDS.rectAngle,
]
export const backgroundCanvasToolsIds = [
  IDS.withoutGrid,
  IDS.xGrid,
  IDS.yGrid,
  IDS.xyGrid,
]




export const iconsInMainToolbar = [
  {
    id: "firstPen",
    subMenuItems: [
      { id: "firstPen-subMenu-blue", type: "button", dataColor: "blue" },
      { id: "firstPen-subMenu-green", type: "button", dataColor: "green" },
      { id: "firstPen-subMenu-red", type: "button", dataColor: "red" },
      { id: "firstPen-subMenu-#e3e3e3", type: "button", dataColor: "#e3e3e3" },
      {
        id: "firstPen-subMenu-gold",
        type: "button",
        dataColor: "gold",
      },
      {
        id: "firstPen-subMenu-setcolor",
        type: "color",
        pathIcon: "../../public/shaps/triangleW.png",
      },
      { id: "firstPen-subMenu-range", type: "range", nameINput: "range" },
    ],
    hasSubMenu: true,
    dataAction: "UI",
    name: "fa-pencil",
    type: "checkbox",
  },
  {
    id: "secondPen",
    subMenuItems: [
      { id: "secondPen-subMenu-blue", type: "button", dataColor: "blue" },
      { id: "secondPen-subMenu-green", type: "button", dataColor: "green" },
      { id: "secondPen-subMenu-red", type: "button", dataColor: "red" },
      { id: "secondPen-subMenu-#e3e3e3", type: "button", dataColor: "#e3e3e3" },
      {
        id: "secondPen-subMenu-gold",
        type: "button",
        dataColor: "gold",
      },
      {
        id: "secondPen-subMenu-setcolor",
        type: "color",
        nameIcon: "fa-pen",
      },
      { id: "secondPen-subMenu-range", type: "range", nameINput: "range" },
    ],
    hasSubMenu: true,
    dataAction: "UI",
    name: "fa-pencil",
    type: "checkbox",
  },
  {
    id: "thirdPen",
    subMenuItems: [
      { id: "thirdPen-subMenu-blue", type: "button", dataColor: "blue" },
      { id: "thirdPen-subMenu-green", type: "button", dataColor: "green" },
      { id: "thirdPen-subMenu-red", type: "button", dataColor: "red" },
      { id: "thirdPen-subMenu-#e3e3e3", type: "button", dataColor: "#e3e3e3" },
      {
        id: "thirdPen-subMenu-gold",
        type: "button",
        dataColor: "gold",
      },
      {
        id: "thirdPen-subMenu-setcolor",
        type: "color",
        nameIcon: "fa-pen",
      },
      { id: "thirdPen-subMenu-range", type: "range", nameINput: "range" },
    ],
    hasSubMenu: true,
    dataAction: "UI",
    name: "fa-pencil",
    type: "checkbox",
  },
  {
    id: "highlighter",
    subMenuItems: [
      { id: "highlighter-subMenu-blue", type: "button", dataColor: "blue" },
      { id: "highlighter-subMenu-green", type: "button", dataColor: "green" },
      { id: "highlighter-subMenu-red", type: "button", dataColor: "red" },
      {
        id: "highlighter-subMenu-#e3e3e3",
        type: "button",
        dataColor: "#e3e3e3",
      },
      { id: "highlighter-subMenu-gold", type: "button", dataColor: "gold" },
      { id: "highlighter-subMenu-setcolor", type: "color", nameIcon: "fa-pen" },
      { id: "highlighter-subMenu-range", type: "range", nameINput: "range" },
    ],
    hasSubMenu: true,
    dataAction: "UI",
    name: "fa-brush",
    type: "checkbox",
  },
  {
    id: "eraser",
    subMenuItems: [
      { id: "eraser-subMenu-size", type: "range", nameINput: "range" },
    ],
    hasSubMenu: true,
    dataAction: "UI",
    name: "fa-eraser",
    type: "checkbox",
  },
  {
    id: "shaps",
    subMenuItems: [
      { id: "shaps-subMenu-blue", type: "button", dataColor: "blue" },
      { id: "shaps-subMenu-green", type: "button", dataColor: "green" },
      { id: "shaps-subMenu-red", type: "button", dataColor: "red" },
      { id: "shaps-subMenu-#e3e3e3", type: "button", dataColor: "#e3e3e3" },
      {
        id: "shaps-subMenu-gold",
        type: "button",
        dataColor: "gold",
      },
      {
        id: "shaps-subMenu-setcolor",
        type: "color",
        nameIcon: "fa-pen",
      },
      { id: "shaps-subMenu-range", type: "range", nameINput: "range" },
      {
        id: "shaps-subMenu-straightLine",
        type: "button",
        pathIcon: "../../public/shaps/line.png",
        dataTask: "straightLine",
      },
      {
        id: "shaps-subMenu-rectAngle",
        type: "button",
        pathIcon: "../../public/shaps/rectangle.jpg",
        dataTask: "rectAngle",
      },
      {
        id: "shaps-subMenu-circle",
        type: "button",
        pathIcon: "../../public/shaps/circle.jpg",
        dataTask: "circle",
      },
      {
        id: "shaps-subMenu-triangle",
        type: "button",
        pathIcon: "../../public/shaps/triangleW.png",
        dataTask: "triangle",
      },
      { id: "shaps-subMenu-fillOrEmpty", type: "checkbox" },
    ],
    hasSubMenu: true,
    dataAction: "UI-OPERATION",
    name: "fa-star-half-stroke",
    type: "checkbox",
  },
  {
    id: "backgroundCanvas",
    subMenuItems: [
      {
        id: "backgroundCanvas-subMenu-black",
        type: "button",
        dataColor: "#272727",
      },
      {
        id: "backgroundCanvas-subMenu-darkgreen",
        type: "button",
        dataColor: "darkgreen",
      },
      {
        id: "backgroundCanvas-subMenu-#e3e3e3",
        type: "button",
        dataColor: "#e3e3e3",
      },
      {
        id: "backgroundCanvas-subMenu-withoutGrid",
        type: "button",
        pathIcon: "../../public/shaps/png-clipart-computer-icons-logo-forbidden-angle-trademark.png",
        dataTask: "withoutGrid",
      },
      {
        id: "backgroundCanvas-subMenu-xGrid",
        type: "button",
        pathIcon: "../../public/shaps/X_G.png",
        dataTask: "xGrid",
      },
      {
        id: "backgroundCanvas-subMenu-yGrid",
        type: "button",
        pathIcon: "../../public/shaps/Uppercase_letter_Y.png",
        dataTask: "yGrid",
      },
      {
        id: "backgroundCanvas-subMenu-xyGrid",
        type: "button",
        pathIcon: "../../public/shaps/there-is-a-square-grid-icon-11553469575pcofsssmjf.png",
        dataTask: "xyGrid",
      },
      {
        id: "backgroundCanvas-subMenu-size",
        type: "range",
        nameINput: "range",
      },
    ],
    hasSubMenu: true,
    dataAction: "UI-OPERATION",
    name: "fa-television",
    type: "checkbox",
  },
  {
    id: "moveImage",
    hasSubMenu: false,
    name: "fa-hand",
    type: "button",
    dataAction: "OPERATION",
  },
  {
    id: "insertImage",
    hasSubMenu: false,
    name: "fa-image",
    type: "file",
    dataAction: "OPERATION",
  },
  {
    id: "saveImage",
    hasSubMenu: false,
    name: "fa-save",
    type: "button",
    dataAction: "OPERATION",
  },
];

export const mainIconsId = iconsInMainToolbar.map((icon) => icon.id);

// export const actionTypes = {
//   SET_TOOL_ACTIVE_STATUS: 'SET_TOOL_ACTIVE_STATUS',
//   RESET_TOOL_STATE: 'RESET_TOOL_STATE',
//   SET_IMAGE_STATE: 'SET_IMAGE_STATE',
// };
