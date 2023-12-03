import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useModal } from "@/hooks/useModal";
import { UserAtom } from "@/stores/UserStore";
import { useAtomValue } from "jotai";
import Button from "@/components/common/button/Button";
import * as S from "./style";
import theme from "@/styles/theme";
import ModalWrapper from "@/components/common/modal/ModalWrapper";
import Login from "@/components/ModalContent/Login/Login";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const nickname = useAtomValue(UserAtom).nickname;

  const { modal, openModal } = useModal();
  const navigate = useNavigate();

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
    <S.Container $visible={visible}>
      <S.Logo onClick={() => navigate("/")}>Devlog</S.Logo>
      <S.ButtonContainer>
        <Button
          $width={8}
          $height={2}
          $borderColor="white"
          $backgroundColor="white"
          $color={theme.color.point1}
          text={nickname ? `${nickname}님` : ""}
          onClick={() => {}}
        />
        <Button
          $width={5}
          $height={2}
          $borderColor="white"
          $backgroundColor="white"
          $color={theme.color.point1}
          text="새 글 작성"
          onClick={() => navigate("/write")}
        />
        <Button
          $width={5}
          $height={2}
          $borderColor="white"
          $backgroundColor="white"
          $color={theme.color.point1}
          text="로그인"
          onClick={() => openModal("소셜 로그인하기", <Login />)}
        />
      </S.ButtonContainer>
      {modal.isOpen && <ModalWrapper />}
    </S.Container>
  );
}

export default Header;
