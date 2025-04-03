import { CursorIds } from "interfaces";
import styled from "styled-components";



const cursorMap: Record<CursorIds, string> = {
  firstPen: `url('/svg/pen.svg') 4 30, auto`,
  secondPen: `url('/svg/pen.svg') 4 30, auto`,
  thirdPen: `url('/svg/pen.svg') 4 30, auto`,
  highlighter: `url('/svg/brush.svg') 4 30, auto`,
  eraser: `url('/svg/eraser.svg') 24 30, auto`,
};

interface WhiteboardsStyledProps {
  $whitchToolsSelected: CursorIds;
}

export const WhiteboardsStyled_div = styled.div<WhiteboardsStyledProps>`
  width: 100%;
  height: 100vh;
  background-color: rgb(117, 117, 117);
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  canvas {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    cursor: ${(props) => cursorMap[props.$whitchToolsSelected] || "default"};
    touch-action: none;
  }
`;
