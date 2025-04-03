
import React, { JSX } from "react";
import { LayoutStyled } from "./LayoutStyle";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
