import styled from "styled-components";

export const ToolbarItemStyled_li = styled.li`

  width: 2.5rem;
  height: 2.5rem;
  background-color: #fff;
  border-radius: 100%;
  position: relative;
  box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);
  transition: all 200ms ease-in-out;
  -webkit-transition: all 200ms ease-in-out;
  -moz-transition: all 200ms ease-in-out;
  -ms-transition: all 200ms ease-in-out;
  -o-transition: all 200ms ease-in-out;
  z-index: 3;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 16px 0 rgba(99, 99, 99, 0.4);
  }

  > input:checked + div {
    display: block;
  }

  > label {
    background-color: #fff;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
   

    > i {
       color: ${(props) => props.color};


    }
  }
`;
