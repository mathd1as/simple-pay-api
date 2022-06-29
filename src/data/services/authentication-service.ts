import { Authentication } from '@/domain/features/authentication'
import { TokenGenerator } from '@/data/contracts/crypto/token'
import { AuthenticationRepo } from '@/data/contracts/repos/authentication-repo'
import { HashComparator } from '@/data/contracts/crypto/password'

export class AuthenticationService implements Authentication {
  constructor (
    private readonly crypto: TokenGenerator,
    private readonly authenticationRepo: AuthenticationRepo,
    private readonly hashComparator: HashComparator
  ) {}

  async exec (params: Authentication.Params): Promise<Authentication.Reuslt> {
    const { email } = params

    const user = await this.authenticationRepo.verifyUser({ email })
    console.log({ user })
    const validPassord = await this.hashComparator.compare({ passwordHash: user.password, password: params.password })

    if (!validPassord) {
      throw new Error('Senha incorreta')
    }
    const payload = {
      id: user.id,
      email: params.email
    }
    const accessToken = await this.crypto.generate({ key: payload, expirationInMs: 30000 })
    return { accessToken }
  }
}
