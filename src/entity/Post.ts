import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

//TODO Crie a entidade de Post

import { User } from "./User";

export class Post {
    id!: number;
    title!: string;
    description!: string;
    userId!: number;
    user?: User;
}