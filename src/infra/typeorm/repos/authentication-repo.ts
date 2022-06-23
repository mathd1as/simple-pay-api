import { AuthenticationRepo } from '@/data/contracts/repos/authentication-repo'
import { DataSource } from 'typeorm'

export class AuthenticationRepository implements AuthenticationRepo {
  constructor (private readonly dataSource: DataSource) {}
  async verifyUser (params: AuthenticationRepo.Params): Promise<Boolean> {
    // const { id } = params
    // const insertResult = await this.dataSource
    //   .createQueryBuilder()
    //   .select()
    //   .where([
    //     { id }
    //   ])
    //   .execute()

    // return insertResult.identifiers[0].id
    return true
  }
}
