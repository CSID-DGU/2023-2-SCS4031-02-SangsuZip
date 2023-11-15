import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 27.625rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 12.5rem;
  border-radius: 5px 5px 0 0;
`;

export const ContentContainer = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  border: 1px solid ${theme.color.gray40};
  border-top: none;
  border-radius: 0 0 5px 5px;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  align-items: center;
`;

export const Tag = styled.p`
  ${theme.fonts.t12Medium};
  color: ${theme.color.point1};
`;

export const Title = styled.p`
  ${theme.fonts.h20Bold};
  color: ${theme.color.black};
`;

export const Content = styled.p`
  ${theme.fonts.t14Medium};
  color: ${theme.color.black};
  margin-bottom: 1rem;
`;

export const Author = styled.p`
  ${theme.fonts.b14Regular};
  color: ${theme.color.black};
  align-self: flex-end;
`;

export const Date = styled.p`
  ${theme.fonts.b14Regular};
  color: ${theme.color.black};
  align-self: flex-end;
`;
