import styled, { keyframes } from "styled-components";
import theme from "../../../styles/theme";

const { color } = theme;

const popAnimation = keyframes`
    0% {
        transform: scale(0.98);
    }
    50%{
        transform: scale(1);
    }
    100% {
        transform: scale(0.98);
    }
    `;

export const Container = styled.div<{
  $width: number;
  $height: number;
  $top: number;
  $left: number;
  $isVisible: boolean;
}>`
  position: relative;
  width: ${(props) => props.$width}rem;
  height: ${(props) => props.$height}rem;
  top: ${(props) => props.$top}rem;
  left: ${(props) => props.$left}rem;
  background-color: ${color.point1};
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  animation: ${popAnimation} 1s infinite;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 1s;
`;

export const Content = styled.p`
  ${theme.fonts.t14Medium};
  color: white;
`;
