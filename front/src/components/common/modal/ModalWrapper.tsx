import React, { Fragment } from "react";
import { useModal } from "@/hooks/useModal";
import * as S from "./style";
import { createPortal } from "react-dom";

function ModalWrapper() {
  const { modal, closeModal } = useModal();

  return createPortal(
    <Fragment>
      <S.ModalOverlay>
        <S.Container>
          <S.CloseButton onClick={closeModal} />
          <S.Title>{modal.title}</S.Title>

          {modal.element}
        </S.Container>
      </S.ModalOverlay>
    </Fragment>,
    document.getElementById("modal")!
  );
}

export default ModalWrapper;
