import { CreateUserRepo } from '@/data/contracts/repos/create-user-repo'
import { User } from '@/domain/models/user'
import { pgUser } from '../entities'

import { DataSource } from 'typeorm'

export class CreateUserRepository implements CreateUserRepo {
  constructor (private readonly dataSource: DataSource) {}
  async perform (params: User): Promise<CreateUserRepo.Result> {
    const { name, email } = params
    const insertResult = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(pgUser)
      .values([
        { name, email }
      ])
      .execute()

    return insertResult.identifiers[0].id
  }
}
