import { randomUUID } from 'crypto';

export class Car {
    readonly id: string;
    model: string
    year: string
    fuelType: string
    miles: string
    color: string
    description: string
    price: string
    imagesUrl: string
    isActive: boolean
    createdAt: Date


    constructor() {
        this.id = randomUUID();
    }
}
