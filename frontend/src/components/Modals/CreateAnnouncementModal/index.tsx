import { Dispatch, SetStateAction, useState, useEffect } from "react";

import kenzieKars from "@/services/kenzieKars";
import ModalBase from "../ModalBase";

interface ICreateAnnouncementModal {
    closeModalFunc: Dispatch<SetStateAction<boolean>>
}

export default function CreateAnnouncementModal({
  closeModalFunc,
}: ICreateAnnouncementModal) {
  const [brandsArr, setBrandsArr] = useState<[] | string[]>([]);
  const [modelOptions, setModelOptions] = useState<any>(null);

  const [carYear, setCarYear] = useState<string>("");

  useEffect(() => {
    async function getKenzieKars() {
      const kars = await kenzieKars.get("/cars");

      const karsArr = Object.keys(kars.data);

      setBrandsArr(karsArr);
    }

    getKenzieKars();
  }, []);

  return (
    <ModalBase
      modalTitle="Criar anuncio"
      closeModal={closeModalFunc}
    >
        
    </ModalBase>
  );
}
