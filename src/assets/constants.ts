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
}as const;

export const IDS = {
  firstPen: "firstPen",
  secondPen: "secondPen",
  thirdPen: "thirdPen",
  highlighter: "highlighter",
  eraser: "eraser",
  shaps: "shaps",
  straightLine: "straightLine",
  circle: "circle",
  triangle: "triangle",
  rectangle: "rectangle",
  backgroundCanvas: "backgroundCanvas",
  xGrid: "xGrid",
  yGrid: "yGrid",
  xyGrid: "xyGrid",
  withoutGrid: "withoutGrid",
  undo: "undo",
  refresh: "refresh",
  moveImage: "moveImage",
  insertImage: "insertImage",
  saveImage: "saveImage",
}as const

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
  IDS.triangle,
  IDS.rectangle,
] as const
export const shapsToolsIds = [
  IDS.straightLine,
  IDS.circle,
  IDS.triangle,
  IDS.rectangle,
]as const
export const backgroundCanvasToolsIds = [
  IDS.withoutGrid,
  IDS.xGrid,
  IDS.yGrid,
  IDS.xyGrid,
]as const

export interface SubMenuItemType {
  id: string;
  type: "button" | "color" | "range" | "file" | "checkbox" 
  dataColor?: string;
  pathIcon?: string;
  nameIcon?: string;
  dataTask?: string;

}

export interface ToolbarItemType {
  id: string;
  name: string;
  type: "checkbox" | "button" | "file";
  dataAction: string;
  hasSubMenu: boolean;
  subMenuItems?: SubMenuItemType[]; 
}

export const iconsInMainToolbar: ToolbarItemType[] = [
  {
    id: "firstPen",
    subMenuItems: [
      { id: "firstPen-subMenu-#0000FF", type: "button", dataColor: "#0000FF" },
      { id: "firstPen-subMenu-#008000", type: "button", dataColor: "#008000" },
      { id: "firstPen-subMenu-#FF0000", type: "button", dataColor: "#FF0000" },
      { id: "firstPen-subMenu-#000000", type: "button", dataColor: "#000000" },
      {
        id: "firstPen-subMenu-#ffd700",
        type: "button",
        dataColor: "#ffd700",
      },
      {
        id: "firstPen-subMenu-setcolor",
        type: "color",
        pathIcon: "../../public/shaps/triangleW.png",
      },
      { id: "firstPen-subMenu-range", type: "range"},
    ],
    hasSubMenu: true,
    dataAction: "UI",
    name: "fa-pencil",
    type: "checkbox",
  },
  {
    id: "secondPen",
    subMenuItems: [
      { id: "secondPen-subMenu-#0000FF", type: "button", dataColor: "#0000FF" },
      { id: "secondPen-subMenu-#008000", type: "button", dataColor: "#008000" },
      { id: "secondPen-subMenu-#FF0000", type: "button", dataColor: "#FF0000" },
      { id: "secondPen-subMenu-#000000", type: "button", dataColor: "#000000" },
      {
        id: "secondPen-subMenu-#ffd700",
        type: "button",
        dataColor: "#ffd700",
      },
      {
        id: "secondPen-subMenu-setcolor",
        type: "color",
        nameIcon: "fa-pen",
      },
      { id: "secondPen-subMenu-range", type: "range",  },
    ],
    hasSubMenu: true,
    dataAction: "UI",
    name: "fa-pencil",
    type: "checkbox",
  },
  {
    id: "thirdPen",
    subMenuItems: [
      { id: "thirdPen-subMenu-#0000FF", type: "button", dataColor: "#0000FF" },
      { id: "thirdPen-subMenu-#008000", type: "button", dataColor: "#008000" },
      { id: "thirdPen-subMenu-#FF0000", type: "button", dataColor: "#FF0000" },
      { id: "thirdPen-subMenu-#000000", type: "button", dataColor: "#000000" },
      {
        id: "thirdPen-subMenu-#ffd700",
        type: "button",
        dataColor: "#ffd700",
      },
      {
        id: "thirdPen-subMenu-setcolor",
        type: "color",
        nameIcon: "fa-pen",
      },
      { id: "thirdPen-subMenu-range", type: "range" },
    ],
    hasSubMenu: true,
    dataAction: "UI",
    name: "fa-pencil",
    type: "checkbox",
  },
  {
    id: "highlighter",
    subMenuItems: [
      { id: "highlighter-subMenu-#0000FF", type: "button", dataColor: "#0000FF" },
      { id: "highlighter-subMenu-#008000", type: "button", dataColor: "#008000" },
      { id: "highlighter-subMenu-#FF0000", type: "button", dataColor: "#FF0000" },
      {
        id: "highlighter-subMenu-#36454F",
        type: "button",
        dataColor: "#36454F",
      },
      { id: "highlighter-subMenu-#ffd700", type: "button", dataColor: "#ffd700" },
      { id: "highlighter-subMenu-setcolor", type: "color", nameIcon: "fa-pen" },
      { id: "highlighter-subMenu-range", type: "range"},
    ],
    hasSubMenu: true,
    dataAction: "UI",
    name: "fa-brush",
    type: "checkbox",
  },
  {
    id: "eraser",
    subMenuItems: [
      { id: "eraser-subMenu-size", type: "range"},
    ],
    hasSubMenu: true,
    dataAction: "UI",
    name: "fa-eraser",
    type: "checkbox",
  },
  {
    id: "shaps",
    subMenuItems: [
      { id: "shaps-subMenu-#0000FF", type: "button", dataColor: "#0000FF" },
      { id: "shaps-subMenu-#008000", type: "button", dataColor: "#008000" },
      { id: "shaps-subMenu-#FF0000", type: "button", dataColor: "#FF0000" },
      { id: "shaps-subMenu-#000000", type: "button", dataColor: "#000000" },
      {
        id: "shaps-subMenu-#FFFF00",
        type: "button",
        dataColor: "#FFFF00",
      },
      {
        id: "shaps-subMenu-setcolor",
        type: "color",
        nameIcon: "fa-pen",
      },
      { id: "shaps-subMenu-range", type: "range" },
      {
        id: "shaps-subMenu-straightLine",
        type: "button",
        pathIcon: "../../public/shaps/line.png",
        dataTask: "straightLine",
      },
      {
        id: "shaps-subMenu-rectangle",
        type: "button",
        pathIcon: "../../public/shaps/rectangle.jpg",
        dataTask: "rectangle",
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
        id: "backgroundCanvas-subMenu-#252525",
        type: "button",
        dataColor: "#252525",
      },
      {
        id: "backgroundCanvas-subMenu-#556b2f",
        type: "button",
        dataColor: "#556b2f",
      },
      {
        id: "backgroundCanvas-subMenu-#efefef",
        type: "button",
        dataColor: "#efefef",
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
        type: "range"
      },
    ],
    hasSubMenu: true,
    dataAction: "UI-OPERATION",
    name: "fa-television",
    type: "checkbox",
  },
  {
    id: "undo",
    hasSubMenu: false,
    name: "fa-undo",
    type: "button",
    dataAction: "OPERATION",
  },
  {
    id: "refresh",
    hasSubMenu: false,
    name: "fa-refresh",
    type: "button",
    dataAction: "OPERATION",
  },
  {
    id: "moveImage",
    hasSubMenu: false,
    name: "fa-arrows",
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


