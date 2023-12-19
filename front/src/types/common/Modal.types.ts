import React from "react";

export type ModalType = {
  title: string;
  isOpen: boolean;
  element: React.ReactNode;
  callback?: () => void;
};
