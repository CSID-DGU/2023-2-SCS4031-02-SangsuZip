import styled from "styled-components";
import theme from "../../styles/theme";

const { color } = theme;

export const Container = styled.div`
  margin-top: 6rem;
  width: 100%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: white;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  ${theme.fonts.button12Medium};
  color: ${color.point1};
`;

export const Title = styled.p`
  ${theme.fonts.h34Bold};
`;

export const AuthorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  ${theme.fonts.t12Medium};
`;

export const Author = styled.p`
  color: ${color.black};
`;

export const Date = styled.p`
  color: ${color.gray70};
`;

export const Content = styled.div`
  min-height: 60vh;
`;

export const NeighborContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-top: 1px solid ${color.gray40};
  border-bottom: 1px solid ${color.gray40};
  padding: 1.5rem 0;
`;

export const NeighborFeed = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NeighborType = styled.p`
  ${theme.fonts.b12Regular};
  color: ${color.gray90};
`;

export const NeighborTitle = styled.p`
  ${theme.fonts.b14Regular};
  color: ${color.black};
  margin-right: auto;
  margin-left: 1rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.gray40};
`;

export const NeighborIcon = styled.img`
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
`;
