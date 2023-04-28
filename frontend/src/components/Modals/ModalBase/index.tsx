import { Button } from "@mui/material";

import style from "./style.module.css";
import buttonStyle from "@/components/Buttons/styles.module.css";

import { IModalBase } from "@/interfaces/components/modal";

export default function ModalBase({
  children,
  modalTitle,
  closeModal,
  ...rest
}: IModalBase) {
  return (
    <div
      className={style.modal_background}
      onClick={() => {
        closeModal((prevState) => !prevState);
      }}
      {...rest}
    >
      <div
        className={style.modal_container}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={style.modal_header}>
          <p className="headline-6-600">{modalTitle}</p>
          <Button
            onClick={() => {
              closeModal((prevState) => !prevState);
            }}
            className={buttonStyle.modal_header_button}
            disableRipple={true}
          >
            X
          </Button>
        </div>
        <div className={style.modal_body}>{children}</div>
      </div>
    </div>
  );
}
