import { TokenGenerator, TokenValidator } from '@/domain/contracts/crypto/token'

import { sign, verify, JwtPayload } from 'jsonwebtoken'

export class JwtTokenHandler implements TokenGenerator, TokenValidator {
  constructor (private readonly secret: string) {}

  async generate ({ expirationInMs, key }: TokenGenerator.Input): Promise<TokenGenerator.Output> {
    // const expirationInSeconds = expirationInMs / 1000
    return sign({ key }, this.secret, { expiresIn: 500 })
  }

  async validate ({ token }: TokenValidator.Input): Promise<TokenValidator.Output> {
    const payload = verify(token, this.secret) as JwtPayload
    return payload.key
  }
}
