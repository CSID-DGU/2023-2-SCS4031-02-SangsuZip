import { useModal } from "@/hooks/useModal";
import * as S from "./style";
import { authGithub } from "@/api/auth/github.api";

function Login() {
  const { closeModal } = useModal();

  const onClickGithubLogin = () => {
    authGithub()
      .then((res) => res.data)
      .then((data) => window.open(data.url, "_self", "popup"));
    closeModal();
  };
  return (
    <S.Button onClick={onClickGithubLogin}>
      <S.Container>
        <S.GithubIcon />
        Github로 로그인하기
      </S.Container>
    </S.Button>
  );
}

export default Login;
