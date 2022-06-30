import { CreateUser } from '@/domain/features/create-user'
import { CreateUserRepo } from '@/data/contracts/repos/create-user-repo'
import { HashGenerator } from '@/data/contracts/crypto/password'
import { CreateUserError } from '@/domain/errors'

export class CreateUserService implements CreateUser {
  constructor (
    private readonly createUserRepo: CreateUserRepo,
    private readonly hashGenerator: HashGenerator
  ) {}

  async exec (params: CreateUser.Params): Promise<CreateUser.Result> {
    const registeredEmail = await this.createUserRepo.validateEmail({ email: params.email })
    if (registeredEmail) {
      throw new CreateUserError()
    }
    const passowrdHash = await this.hashGenerator.generatePasswordHash(params.password)
    params.password = passowrdHash
    return await this.createUserRepo.perform(params)
  }
}
