import { AuthType } from "@/types/auth/auth.types";
import { atom } from "jotai";

export const AuthAtom = atom<AuthType>({
  isAuth: false,
});
