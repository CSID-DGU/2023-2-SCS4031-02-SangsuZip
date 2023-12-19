import styled, { css, keyframes } from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 20rem;
  height: 27.625rem;
`;

export const ContentContainer = styled.div`
  padding: 1.5rem 1rem;
  height: 15.125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid ${theme.color.gray40};
  border-top: none;
  border-radius: 0 0 5px 5px;
  gap: 1rem;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  align-items: center;
`;

export const RecommendTagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  align-items: center;
  ${theme.fonts.t12Medium};
  color: ${theme.color.point2};
`;

export const Skeleton = styled.p<{
  $width: number;
  $height: number;
  $isImage?: boolean;
  $alignSelf?: boolean;
}>`
  width: ${(props) => props.$width}rem;
  height: ${(props) => props.$height}rem;
  background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
  animation: ${({ $width }) => css`
    ${keyframes`
    0%{
        background-position: ${-$width / 2}rem 0;
    }
    100%{
        background-position: ${$width / 2}rem 0;
    }
    `} 1s linear infinite;
  `};
  border-radius: ${({ $isImage }) => ($isImage ? "5px 5px 0 0" : "5px")};
  align-self: ${({ $alignSelf }) => ($alignSelf ? "flex-end" : "flex-start")};
`;
