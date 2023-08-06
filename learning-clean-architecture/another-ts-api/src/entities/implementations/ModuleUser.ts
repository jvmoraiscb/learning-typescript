import { Column, Entity, PrimaryColumn } from 'typeorm'
import { User } from '../User'

@Entity()
export class ModuleUser extends User {
    @PrimaryColumn()
    public id: string
    @Column()
    public email: string
    @Column()
    public name: string
    @Column()
    public password: string
}
