import styled from "styled-components";
import { IDS } from "../../assets/constants";

export const WhiteboardsStyled_div = styled.div`
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
    cursor: ${(props) =>
      [IDS.firstPen, IDS.secondPen, IDS.thirdPen].includes(
        props.$whitchToolsSelected
      )
        ? `url('/svg/pen.svg') 4 30, auto`
        : props.$whitchToolsSelected === IDS.highlighter
        ? `url('/svg/brush.svg') 4 30, auto`
        : props.$whitchToolsSelected === IDS.eraser
        ? `url('/svg/eraser.svg') 24 30, auto`
        : "default"};
  }
`;
