import {
    AllHTMLAttributes, Dispatch, ReactNode, SetStateAction
  } from "react";

export interface IModalBase extends AllHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  modalTitle: string;
  closeModal: Dispatch<SetStateAction<boolean>>;
}