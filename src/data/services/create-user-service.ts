import { CreateUser } from '@/domain/features/create-user'
import { CreateUserRepo } from '@/data/contracts/repos/create-user-repo'

export class CreateUserService implements CreateUser {
  constructor (private readonly createUserRepo: CreateUserRepo) {}
  async exec (params: CreateUser.Params): Promise<CreateUser.Result> {
    const user = {
      name: params.name,
      email: params.email
    }
    return await this.createUserRepo.perform(user)
  }
}
