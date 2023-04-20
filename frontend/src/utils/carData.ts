export interface ICar {
    id: string
    name: string
    brand: string
    fuel: number
    value: number
    year: string
}

export const fuelType = {
    1: "Flex",
    2: "Híbrido",
    3: "Eletrônico"
}