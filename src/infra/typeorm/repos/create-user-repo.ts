import { CreateUserRepo } from '@/domain/contracts/repos/create-user-repo'
import { User } from '@/domain/entities/models/user'
import { pgUser } from '@/infra/typeorm/entities'

import { DataSource } from 'typeorm'

export class CreateUserRepository implements CreateUserRepo {
  constructor (private readonly dataSource: DataSource) {}

  async perform (params: User): Promise<CreateUserRepo.Result> {
    const { name, email, password } = params
    const insertResult = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(pgUser)
      .values([
        { name, email, password }
      ])
      .execute()

    const userId = insertResult.identifiers[0].id
    return userId
  }

  async validateEmail (params: { email: string }): Promise<boolean> {
    const { email } = params
    const user = await this.dataSource
      .createQueryBuilder()
      .select('user')
      .from(pgUser, 'user')
      .where('user.email = :email', { email })
      .getOne()

    if (user !== null) {
      return true
    }

    return false
  }
}
