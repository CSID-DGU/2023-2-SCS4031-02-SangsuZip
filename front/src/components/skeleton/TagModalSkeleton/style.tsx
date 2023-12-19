import styled, { css, keyframes } from "styled-components";
import theme from "../../../styles/theme";

const { color } = theme;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;

export const RecTagListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px 5px 0 0;
`;

export const TagButton = styled.button<{ $isSelected: boolean }>`
  width: 10vw;
  min-width: 6rem;
  height: 4.125rem;
  background-color: ${(props) => (props.$isSelected ? "white" : color.gray30)};
  border-radius: 5px 5px 0 0;
  padding: 1rem;
  color: ${(props) => (props.$isSelected ? color.point1 : color.gray60)};
  box-shadow: ${(props) =>
    props.$isSelected
      ? "box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      : "none"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SkeletonTag = styled.p<{ $width: number; $height: number }>`
  width: ${(props) => props.$width}vw;
  height: ${(props) => props.$height}rem;
  background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
  animation: ${({ $width }) => css`
    ${keyframes`
    0%{
        background-position: ${-$width / 2}vw 0;
    }
    100%{
        background-position: ${$width / 2}vw 0;
    }
    `} 1s linear infinite;
  `};
  border-radius: 5px;
  white-space: nowrap;
`;

export const RecTagDescriptionContainer = styled.div`
  width: 75vw;
  height: 70vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1rem;
  overflow-y: scroll;
`;

export const CloseButton = styled.button`
  background-image: url("/assets/icons/CloseIcon.svg");
  background-position: center;
  background-repeat: no-repeat;
  align-self: flex-end;
  margin: 0.5rem;
  padding: 0.5rem;
`;

export const Description = styled.p`
  color: ${color.gray70};
  ${theme.fonts.h16Bold};
  white-space: nowrap;
`;

export const TagNameContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
`;

export const Image = styled.img`
  padding: 1rem;
  background-image: url("/assets/icons/Computer.svg");
  background-position: center;
  background-repeat: no-repeat;
`;

export const TagName = styled.p`
  color: ${color.black};
  ${theme.fonts.h18Bold};
`;

export const TagDescription = styled.p`
  color: ${color.black};
  ${theme.fonts.h16Bold};
`;

export const FeedThumbnailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-self: normal;
  gap: 5rem;
`;
