import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn } from "typeorm"
import {Group} from "./Group"
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    user_id: number

    @Column({
        unique: true
    })
    username: string

    @CreateDateColumn()
    created: Date;

    @Column({
        nullable: true
    })
    group_id: number
}
