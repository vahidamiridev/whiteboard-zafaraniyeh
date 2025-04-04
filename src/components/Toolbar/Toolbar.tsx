import React from "react";
import { ToolbarStyled_section } from "./ToolbarStyled";
import ToolbarList from "./ToolbarList/ToolbarList";
import { JSX } from "react/jsx-runtime";
 interface ToolbarProps {
  inputImageRef :React.RefObject<HTMLInputElement> 
}


const   Toolbar:React.FC<ToolbarProps> =({inputImageRef}):JSX.Element => {
  return (
    <>
      <ToolbarStyled_section>
       <ToolbarList inputImageRef={inputImageRef}/>
      </ToolbarStyled_section>
    </>
  );
}
export default Toolbar
