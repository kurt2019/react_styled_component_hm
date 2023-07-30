import styled from "styled-components";

type ButtonPropsType = {
    color?: string
    margin?: string
    bgc?: string
    border?: string
}

export const MainButton = styled.button<ButtonPropsType>`
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  width: 86px;
  height: 30px;
  border-radius: 5px;
  flex-shrink: 0;
  cursor: pointer;
  font-style: normal;
  border: 2px solid ${props => props.border || "transparent"};
  color: ${props => props.color || "#FFF"};
  background-color: ${props => props.bgc || "#4E71FE"};
  margin: ${props => props.margin || "auto"};

  &:hover {
    background-color: #e1dd10;
    color: black;
  }

`