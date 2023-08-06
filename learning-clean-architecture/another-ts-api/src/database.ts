import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { ModuleUser } from './entities/implementations/ModuleUser'

const database = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    entities: [ModuleUser],
})

export { database }
