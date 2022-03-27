import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Group {

    @PrimaryGeneratedColumn()
    group_id: number

    @Column({unique: true})
    name: string

    @Column({default: true})
    description: string = " "

}
