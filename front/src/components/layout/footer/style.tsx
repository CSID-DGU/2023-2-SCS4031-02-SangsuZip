import styled from "styled-components";
import theme from "../../../styles/theme";

const { color } = theme;

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 6rem;
  border-top: 1px solid ${color.gray40};
`;
