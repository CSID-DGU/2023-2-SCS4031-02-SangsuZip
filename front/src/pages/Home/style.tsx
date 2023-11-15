import styled from "styled-components";
import theme from "../../styles/theme";

const { color } = theme;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100%;
  background-color: ${color.gray20};
  gap: 3rem;
  overflow-y: scroll;
`;

export const SearchContainer = styled.div`
  margin-top: 7rem;
  width: 50vw;
  height: 3rem;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  border: 1px solid ${color.gray50};
  border-radius: 5px;
  box-shadow: 0px 0px 20px -18px;
  background-color: white;
`;

export const SearchIcon = styled.img`
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
`;

export const SearchBar = styled.input`
  margin-left: 0.875rem;
  width: 100%;
  ${theme.fonts.t14Medium};
  outline: none;
  border: none;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  &:active {
    transform: scale(0.99);
  }
`;

export const FeedContainer = styled.div`
  width: 80vw;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px 5px 0 0;
`;

export const ThumbnailContainer = styled.div`
  padding: 1.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  width: 100%;
  background-color: white;
  border-radius: 5px;
`;
