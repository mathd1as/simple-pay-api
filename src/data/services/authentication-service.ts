import { Authentication } from '@/domain/features/authentication'
import { TokenGenerator } from '@/data/contracts/crypto/token'
import { AuthenticationRepo } from '@/data/contracts/repos/authentication-repo'

export class AuthenticationService implements Authentication {
  constructor (
    private readonly crypto: TokenGenerator,
    private readonly authenticationRepo: AuthenticationRepo
  ) {}

  async exec (params: Authentication.Params): Promise<Authentication.Reuslt> {
    const accessToken = await this.crypto.generate({ key: '10', expirationInMs: 30000 })
    return { accessToken }
  }
}
