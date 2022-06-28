import { AuthenticationRepo } from '@/data/contracts/repos/authentication-repo'
import { DataSource } from 'typeorm'
import { pgUser } from '@/infra/typeorm/entities'

export class AuthenticationRepository implements AuthenticationRepo {
  constructor (private readonly dataSource: DataSource) {}

  async verifyUser (params: AuthenticationRepo.Params): Promise<{password: string}> {
    const { email } = params
    const user = await this.dataSource
      .createQueryBuilder()
      .select('user')
      .from(pgUser, 'user')
      .where('user.email = :email', { email })
      .getOne()
    if (user === null) {
      return { password: '' }
    }
    return {
      password: user.password
    }
  }
}
