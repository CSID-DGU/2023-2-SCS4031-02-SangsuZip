import styled from "styled-components";
import theme from "../../styles/theme";

const { color } = theme;

export const Container = styled.div`
  width: 100vw;
  display: flex;
`;

export const FeedContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${color.gray20};
`;
