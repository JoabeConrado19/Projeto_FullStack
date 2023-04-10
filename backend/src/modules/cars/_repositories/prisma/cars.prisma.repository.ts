import { PrismaService } from "src/prisma/prisma.service";
import { CreateCarsDto } from "../../dto/create-car.dto";
import { UpdateCarsDto } from "../../dto/update-car.dto";
import { Car } from "../../entities/car.entity";
import { CarsRepository } from "../cars.repository";

export class CarsPrismaRepository implements CarsRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateCarsDto): Promise<Car> {
        const car = new Car();
        Object.assign(car, {
            ...data,
        });

        return
    }

    findAll(): Promise<Car[]> {
        throw new Error("Method not implemented.");
    }

    findOne(id: string): Promise<Car> {
        throw new Error("Method not implemented.");
    }

    update(id: string, data: UpdateCarsDto): Promise<Car> {
        throw new Error("Method not implemented.");
    }

    async delete(id: string): Promise<void> {
        await this.prisma.cars.delete({
            where: { id },
        });
    }
}