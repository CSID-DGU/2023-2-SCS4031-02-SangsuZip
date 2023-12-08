import { UserType } from "@/types/api/user/user.types";
import { atom } from "jotai";

export const UserAtom = atom<UserType>({
  id: "",
  email: "",
  nickname: "",
});
