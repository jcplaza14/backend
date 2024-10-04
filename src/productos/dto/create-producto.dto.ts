import { IsString, IsNumber } from 'class-validator';
export class CreateProductoDto {
    @IsString({ message: "El nombre del producto debe ser una cadena"})
    nombre: string;

    @IsNumber({},{ message: "El precio debe ser numerico"})
    precio: number;
}
