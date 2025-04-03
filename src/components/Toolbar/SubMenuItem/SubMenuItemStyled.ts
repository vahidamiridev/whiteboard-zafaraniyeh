import styled from "styled-components";
interface ItemOfSubMenuStyledPorps {
  $pathIcon:string
}

export const ItemOfSubMenuStyled_input = styled.input<ItemOfSubMenuStyledPorps>`
  display: block;
  width: ${(props) => (props.type === "range" ? "100%" : "1.3rem")};
  height: ${(props) => (props.type === "range" ? "1px" : "1.3rem")};
  border: ${(props) =>props.type !== "range" && "2px solid rgba(0, 0, 0, 0.118)"};
  border-radius: ${(props) => props.type !== "range" && "100%"};
  box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.color || ""};
  background:${props => props.$pathIcon && `url(${props.$pathIcon})center/cover no-repeat` };

  



  &:hover {
    box-shadow: 0 4px 16px 0 rgba(99, 99, 99, 0.4);
    transition: all 200ms ease-in-out;
    -webkit-transition: all 200ms ease-in-out;
    -moz-transition: all 200ms ease-in-out;
    -ms-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
  }
`;
