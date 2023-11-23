import styled from "styled-components";
import theme from "../../styles/theme";

const { color } = theme;

export const Container = styled.div`
  width: 100vw;
  display: flex;
`;

export const TagContainer = styled.div`
  margin-top: 6rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem 2rem;
  min-width: 12rem;
`;

export const TagListTitle = styled.p`
  ${theme.fonts.h24Bold};
`;

export const FeedContainer = styled.div`
  flex: 7;
  padding: 2rem;
  background-color: ${color.gray20};
`;
