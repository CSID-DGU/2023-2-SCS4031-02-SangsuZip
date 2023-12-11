import { atom } from "jotai";
import { ModalType } from "../../types/common/Modal.types";

export const ModalAtom = atom<ModalType>({
  title: "",
  isOpen: false,
  element: "",
});
