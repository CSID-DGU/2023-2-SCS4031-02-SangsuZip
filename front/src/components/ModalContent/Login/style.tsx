import theme from "@/styles/theme";
import styled from "styled-components";

const { color } = theme;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin-top: 2rem;
  width: 70%;
  height: 3rem;
  border-radius: 5px;
  background-color: ${color.github};
  color: white;
  font-size: 1rem;
  font-weight: 700;
`;

export const GithubIcon = styled.img`
  background-image: url("/assets/icons/GithubIcon.svg");
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  background-color: white;
  width: 1.5rem;
  height: 1.5rem;
  padding: 1rem;
  margin-right: 1rem;
`;
