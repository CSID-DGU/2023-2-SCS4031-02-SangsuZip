import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useModal } from "@/hooks/useModal";
import { UserAtom } from "@/stores/UserStore";
import { useAtom, useAtomValue } from "jotai";
import Button from "@/components/common/button/Button";
import * as S from "./style";
import theme from "@/styles/theme";
import ModalWrapper from "@/components/common/modal/ModalWrapper";
import Login from "@/components/ModalContent/Login/Login";
import { AuthAtom } from "@/stores/AuthStore";
import Cookies from "js-cookie";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  // const email = useAtomValue(UserAtom).email;

  const [auth, setAuth] = useAtom(AuthAtom);
  const [user, setUser] = useAtom(UserAtom);
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

  useEffect(() => {
    if (localStorage.getItem("email") && localStorage.getItem("userId")) {
      setAuth({ isAuth: true });
    }
  }, []);

  return (
    <S.Container $visible={visible}>
      <S.Logo onClick={() => navigate("/")}>Devlog</S.Logo>
      <S.ButtonContainer>
        <Button
          $width={12}
          $height={2}
          $borderColor="white"
          $backgroundColor="white"
          $color={theme.color.point1}
          text={user.email ? user.email : ""}
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
        {auth.isAuth ? (
          <Button
            $width={5}
            $height={2}
            $borderColor="white"
            $backgroundColor="white"
            $color={theme.color.point1}
            text="로그아웃"
            onClick={() => {
              setAuth({ isAuth: false });
              localStorage.removeItem("userId");
              localStorage.removeItem("email");
              setUser({ email: "", id: "", nickname: "" });
              Cookies.remove("token");
              navigate("/", { replace: true });
            }}
          />
        ) : (
          <Button
            $width={5}
            $height={2}
            $borderColor="white"
            $backgroundColor="white"
            $color={theme.color.point1}
            text="로그인"
            onClick={() => openModal("소셜 로그인하기", <Login />)}
          />
        )}
      </S.ButtonContainer>
      {modal.isOpen && <ModalWrapper />}
    </S.Container>
  );
}

export default Header;
