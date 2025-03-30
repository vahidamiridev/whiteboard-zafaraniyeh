import React from "react";
import { LayoutStyled } from "./LayoutStyle";

export default function Layout({ children }) {
  return (
    <>
      <LayoutStyled>{children}</LayoutStyled>
    </>
  );
}
