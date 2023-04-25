import CreateAnnouncementModal from "@/components/Modals/CreateAnnouncementModal";
import ModalBase from "@/components/Modals/ModalBase";
import { Button } from "@mui/material";
import { useState } from "react";

export default function ModalTest() {
    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <div>
            <Button 
                onClick={() => {
                    setShowModal((prevState) => !prevState)
                }}
                variant="contained"
            >Teste</Button>
            {
                showModal ? 
                <CreateAnnouncementModal closeModalFunc={setShowModal} />
                : null
            }
        </div>
    )
}