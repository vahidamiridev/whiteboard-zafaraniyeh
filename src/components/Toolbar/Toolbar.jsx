import React from "react";
import { ToolbarStyled_section } from "./ToolbarStyled";
import ToolbarList from "./ToolbarList/ToolbarList";

export default function Toolbar({inputImageRef}) {
  return (
    <>
      <ToolbarStyled_section>
       <ToolbarList inputImageRef={inputImageRef}/>
      </ToolbarStyled_section>
    </>
  );
}
