import styled from "styled-components";

export const ContainerSubMenu_div = styled.div`

display: none;
min-width: 7rem;
height: auto;
padding: 3px;
box-shadow: 0 2px 8px 0 rgba(99, 99, 99, 0.2);
background-color: #fff;
border-radius: 5px;
position: absolute;
top: 30%;
left: 65%;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
-ms-border-radius: 5px;
-o-border-radius: 5px;
z-index: 4;

 >ul {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap:.8rem .3rem;
    flex-wrap: wrap;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
  }


`