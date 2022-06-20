import { Authentication } from '@/domain/features/authentication'
import { TokenGenerator } from '../contracts/crypto/token'

export class AuthenticationService implements Authentication {
  constructor (private readonly crypto: TokenGenerator) {}

  async exec (params: Authentication.Params): Promise<Authentication.Reuslt> {
    console.log(params)
    const accessToken = await this.crypto.generate({ key: '10', expirationInMs: 30000 })
    return { accessToken }
  }
}
