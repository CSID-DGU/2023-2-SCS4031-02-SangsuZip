import { ButtonProps } from "@/types/common/Button.types";
import { Container } from "./style";

function Button({
  $width,
  $height,
  $backgroundColor,
  $borderColor,
  $color,
  $fontSize,
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
      $fontSize={$fontSize}
      onClick={onClick}
    >
      {text}
    </Container>
  );
}

export default Button;
