import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

//TODO Crie a entidade de User

export class User {
    id!: number;         
    firstName!: string;
    lastName!: string;
    email!: string;
}
