import { AuthAtom } from "../stores/jotai/AuthStore";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Auth(
  SepecficComponent: React.ComponentType,
  option: null | boolean
) {
  //null => 아무나 출입이 가능한 페이지
  //true => 로그인한 유저만 출입이 가능한 페이지
  //false => 로그인한 유저는 출입 불가능한 페이지

  function AuthenticationCheck() {
    const [auth, setAuth] = useAtom(AuthAtom);
    // 수정해야함.
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    const checkAuth = (isAuth: boolean) => {
      if (!isAuth) {
        if (option === true) return navigate("/", { replace: true });
        else setLoading(false);
      } else {
        if (option === false) return navigate("/", { replace: true });
        else setLoading(false);
      }
    };

    useEffect(() => {
      const user = localStorage.getItem("userId");

      if (user === null) {
        setAuth({ isAuth: false });
      } else {
        setAuth({ isAuth: true });
      }
      checkAuth(auth.isAuth);
    }, []);
    if (loading) return <div>loading</div>;
    else return <SepecficComponent />;
  }

  return AuthenticationCheck;
}
