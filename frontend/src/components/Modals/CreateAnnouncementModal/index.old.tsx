import { Dispatch, SetStateAction, useState, useEffect, useRef } from "react";

import ModalBase from "../ModalBase";
import { Button, TextField } from "@mui/material";
import { FormContainer, SelectElement, TextFieldElement, Element } from "react-hook-form-mui";
import kenzieKars from "@/services/kenzieKars";

interface ICreateAnnouncementModal {
    closeModalFunc: Dispatch<SetStateAction<boolean>>
}

export default function CreateAnnouncementModal({
    closeModalFunc
}: ICreateAnnouncementModal) {
    const [brandsArr, setBrandsArr] = useState<[] | string[]>([])
    const [modelOptions, setModelOptions] = useState<any>(null)
    
    const [carYear, setCarYear] = useState<string>("")

    useEffect(() => {
        async function getKenzieKars() {
            const kars = await kenzieKars.get("/cars")

            const karsArr = Object.keys(kars.data)

            setBrandsArr(karsArr)            
        }  

        getKenzieKars()
    }, [])

    return (
        <ModalBase
            modalTitle="Criar anuncio"
            closeModal={closeModalFunc}
        >
            <FormContainer
                onSuccess={(data) => console.log(data)}
            >
                <SelectElement 
                    name="brand"
                    label="Marca"
                    options={
                        brandsArr.map((value) => {
                            return {
                                id: value,
                                label: value.charAt(0).toUpperCase() + value.slice(1)
                            }
                        })
                    }
                    onChange={async (value) => {
                        const filterModels = await kenzieKars.get(`/cars?brand=${value}`)
                        
                        setModelOptions(filterModels.data)
                    }}
                    required
                />
                <SelectElement 
                    name="model"
                    label="Modelo"
                    disabled={modelOptions ? false : true}
                    options={
                        modelOptions?.map((value: any) => {
                            const carName = value.name
                            
                            return {
                                id: carName,
                                label: carName.charAt(0).toUpperCase() + carName.slice(1)
                            }
                        })
                    }
                    onChange={(carName) => {
                        const carData = modelOptions?.find((car) => car.name === carName)    
                        
                        setCarYear(carData.year)
                    }}
                    required
                />
                <SelectElement 
                    name="year"
                    label="Ano"
                    disabled
                    inputProps={{
                        value: carYear ? carYear : ""
                    }}
                    value={carYear}
                />
                <TextFieldElement 
                    name="fuel"
                    label="Combustivel"
                    disabled
                    inputProps={{
                        value: carYear ? carYear : ""
                    }}
                />
                <Button
                    type="submit"
                >Cadastrar</Button>
            </FormContainer>
        </ModalBase>
    )
}