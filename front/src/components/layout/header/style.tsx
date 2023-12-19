import styled from "styled-components";
import theme from "../../../styles/theme";
const { color } = theme;

export const Container = styled.div<{ $visible: boolean }>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: top 0.5s, opacity 0.5s;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  width: 100vw;
  height: 6rem;
  padding: 0 2rem;
  border-bottom: 1px solid ${color.gray40};
  background-color: white;
  z-index: 99;
`;

export const Logo = styled.p`
  color: ${color.point1};
  ${theme.fonts.h24Bold};
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
