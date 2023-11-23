import styled from "styled-components";
import theme from "../../styles/theme";

const { color } = theme;

export const Container = styled.div`
  width: 100vw;
  background-color: ${color.gray20};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopContainer = styled.div`
  margin-top: 6rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.input`
  width: 40vw;
  height: 3rem;
  padding: 0.5rem;
  border: none;
  outline: none;
  border-bottom: 1px solid ${color.gray40};
  border-radius: 5px;
  background-color: transparent;
  ${theme.fonts.t16Medium};
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const EnteredTag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const TagInput = styled.input`
  width: 20vw;
  height: 3rem;
  padding: 0.5rem;
  border: none;
  outline: none;
  border-bottom: 1px solid ${color.gray40};
  border-radius: 5px;
  background-color: transparent;
  ${theme.fonts.t14Medium};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const EditorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 2rem;
`;
