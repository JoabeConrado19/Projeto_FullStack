import {
    IsBoolean,
    IsNotEmpty,
    IsString
} from 'class-validator';

export class CreateCarsDto {
    @IsString()
    @IsNotEmpty()
    model: string;

    @IsString()
    year: string;

    @IsString()
    @IsNotEmpty()
    fuelType: string;

    @IsString()
    @IsNotEmpty()
    miles: string;

    @IsString()
    @IsNotEmpty()
    color: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    price: string;

    @IsString()
    @IsNotEmpty()
    imagesUrl: string;

    @IsBoolean()
    @IsNotEmpty()
    isActive: Boolean;

}
