import React from "react";
import { ButtonProps } from "../../../types/common/button.types";
import { Container } from "./style";

function Button({
  $width,
  $height,
  $backgroundColor,
  $borderColor,
  $color,
  text,
  $hasBorder,
  onClick,
}: ButtonProps) {
  return (
    <Container
      $width={$width}
      $height={$height}
      $backgroundColor={$backgroundColor}
      $borderColor={$borderColor}
      $color={$color}
      $hasBorder={$hasBorder}
      onClick={onClick}
    >
      {text}
    </Container>
  );
}

export default Button;
