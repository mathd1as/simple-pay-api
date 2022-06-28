import { CreateUser } from '@/domain/features/create-user'
import { CreateUserRepo } from '@/data/contracts/repos/create-user-repo'

export class CreateUserService implements CreateUser {
  constructor (private readonly createUserRepo: CreateUserRepo) {}
  async exec (params: CreateUser.Params): Promise<CreateUser.Result> {
    const registeredEmail = await this.createUserRepo.validateEmail({ email: params.email })
    if (registeredEmail) {
      throw new Error('Email já cadastrado')
    }
    return await this.createUserRepo.perform(params)
  }
}
