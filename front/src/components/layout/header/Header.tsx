import { useEffect, useState } from "react";
import Button from "../../common/button/Button";
import { ButtonContainer, Container } from "./style";
import theme from "../../../styles/theme";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const visible = currentScrollPos < 24 || prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <Container $visible={visible}>
      <p>Devlog</p>
      <ButtonContainer>
        <Button
          $width={5}
          $height={2}
          $borderColor="white"
          $backgroundColor="white"
          $color={theme.color.point1}
          text="정원호님"
          onClick={() => {
            console.log("zz");
          }}
        />
        <Button
          $width={5}
          $height={2}
          $borderColor="white"
          $backgroundColor="white"
          $color={theme.color.point1}
          text="새 글 작성"
          onClick={() => {
            console.log("zz");
          }}
        />
        <Button
          $width={5}
          $height={2}
          $borderColor="white"
          $backgroundColor="white"
          $color={theme.color.point1}
          text="로그아웃"
          onClick={() => {
            console.log("zz");
          }}
        />
      </ButtonContainer>
    </Container>
  );
}

export default Header;
