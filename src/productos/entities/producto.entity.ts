import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    precio: number;

    @Column({nullable: true })
    descripcion?: string;

    @Column({default: "ACTIVO" })
    estado: string;



}
