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

    const passwordHash = await this.authenticationRepo.verifyUser({ email })
    const validPassord = await this.hashComparator.compare({ passwordHash: passwordHash.password, password: params.password })
    console.log({ validPassord })
    if (!validPassord) {
      throw new Error('Senha incorreta')
    }
    const accessToken = await this.crypto.generate({ key: '10', expirationInMs: 30000 })
    return { accessToken }
  }
}
