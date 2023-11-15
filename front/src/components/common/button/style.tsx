import styled from "styled-components";
import { ButtonProps } from "../../../types/common/button.types";
import theme from "../../../styles/theme";

const { fonts } = theme;

export const Container = styled.button<ButtonProps>`
  width: ${(props) => props.$width}rem;
  height: ${(props) => props.$height}rem;
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$color};
  border: 1px solid ${(props) => props.$borderColor};
  border-radius: ${(props) => (props.hasBorder ? "5px" : "0")};
  ${fonts.button16Medium}

  &:hover {
    border-bottom: 1px solid ${(props) => props.$color};
    transition: all 0.5s ease-in;
  }
`;
