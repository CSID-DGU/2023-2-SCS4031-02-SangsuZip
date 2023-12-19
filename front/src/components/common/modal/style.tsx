import theme from "../../../styles/theme";
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 999;

  animation: fadeIn 0.3s ease-in-out;
`;

export const Container = styled.div`
  width: 25vw;
  height: 30vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: white;
  border-radius: 5px;
`;

export const CloseButton = styled.button`
  background-image: url("/assets/icons/CloseIcon.svg");
  background-position: center;
  background-repeat: no-repeat;
  align-self: flex-end;
  margin: 0.5rem;
  padding: 0.5rem;
`;

export const Title = styled.p`
  ${theme.fonts.h20Bold};
`;
