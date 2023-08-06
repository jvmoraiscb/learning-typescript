import { User } from '../../entities/User'
import { IUsersRepository } from '../IUsersRepository'
import { database } from '../../database'
import { ModuleUser } from '../../entities/implementations/ModuleUser'

export class PostgresUsersRepository implements IUsersRepository {
    private repository = database.getRepository(ModuleUser)

    async findByEmail(email: string): Promise<User> {
        const moduleUser = this.repository.findOneBy({
            email: email,
        })

        let user: User
        Object.assign(user, moduleUser)

        return user
    }
    async save(user: User): Promise<void> {
        let moduleUser: ModuleUser
        Object.assign(moduleUser, user)

        this.repository.save(moduleUser)
    }
}
