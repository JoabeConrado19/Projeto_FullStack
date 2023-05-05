import { AllHTMLAttributes, Dispatch, ReactNode, SetStateAction } from "react";
import { IUserData } from "../user";
import { ICar } from "../car";

export interface IModalBase extends AllHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  modalTitle?: string;
  closeModal: Dispatch<SetStateAction<boolean>>;
}

export interface IGenericModal extends Partial<IModalBase> {
  closeModalFunc: Dispatch<SetStateAction<boolean>>;
}

export interface IEditUserInfosModal extends IGenericModal {
  userData: IUserData;
}
export interface IEditAddressInfosModal extends IEditUserInfosModal {}
export interface IDeleteUserConfirmModal extends IEditUserInfosModal {}

export interface ICreateAnnouncementModal extends IGenericModal {
  userData: IUserData
}
export interface IEditAnnouncementModal extends IGenericModal {
  carActualData: ICar
}
