import { Authentication } from '@/domain/use-cases/authentication'
import { TokenGenerator } from '@/domain/contracts/crypto/token'
import { AuthenticationRepo } from '@/domain/contracts/repos/authentication-repo'
import { HashComparator } from '@/domain/contracts/crypto/password'
import { InvalidPasswordError, UserNotFoundError } from '@/domain/entities/errors/authentication-error'

export class AuthenticationService implements Authentication {
  constructor (
    private readonly crypto: TokenGenerator,
    private readonly authenticationRepo: AuthenticationRepo,
    private readonly hashComparator: HashComparator
  ) {}

  async exec (params: Authentication.Params): Promise<Authentication.Reuslt> {
    const { email } = params
    const user = await this.authenticationRepo.verifyUser({ email })
    if (user === undefined) throw new UserNotFoundError()
    const validPassord = await this.hashComparator.compare({ passwordHash: user.password, password: params.password })
    if (!validPassord) throw new InvalidPasswordError()
    const payload = {
      id: user.id,
      email: params.email
    }
    const accessToken = await this.crypto.generate({ key: payload, expirationInMs: 30000 })
    return { accessToken }
  }
}
