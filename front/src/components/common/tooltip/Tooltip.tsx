import { TooltipProps } from "@/types/common/Tooltip.types";
import * as S from "./style";

import { useEffect, useState } from "react";

function Tooltip({ $width, $height, top, left, content }: TooltipProps) {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Container
      className="tooltip"
      $width={$width}
      $height={$height}
      $top={top}
      $left={left}
      $isVisible={isVisible}
    >
      <S.Content>{content}</S.Content>
    </S.Container>
  );
}

export default Tooltip;
