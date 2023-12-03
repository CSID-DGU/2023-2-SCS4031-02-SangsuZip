import { useAtom } from "jotai";
import { useCallback } from "react";
import { ModalAtom } from "@/stores/ModalStore";

export const useModal = () => {
  const [modal, setModal] = useAtom(ModalAtom);

  const closeModal = useCallback(() => {
    setModal((prev) => {
      return {
        ...prev,
        isOpen: false,
      };
    });
  }, [setModal]);

  const openModal = useCallback(
    (title: string, element: React.ReactNode) => {
      setModal({ title, element, isOpen: true });
    },
    [setModal]
  );

  return { modal, closeModal, openModal };
};
