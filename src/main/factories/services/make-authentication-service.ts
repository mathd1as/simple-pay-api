import { AuthenticationService } from '@/domain/services/authentication-service'
import { Bcrypto } from '@/infra/bcrypt/bcrypto'
import { JwtTokenHandler } from '@/infra/jwt/jwt-token-handler'
import { makeAuthenticationRepo } from '@/main/factories/repositories/make-authentication-repo'

export const makeAuthenticationService = (): AuthenticationService => {
  return new AuthenticationService(
    new JwtTokenHandler('SECRET_VAR'),
    makeAuthenticationRepo(),
    new Bcrypto()
  )
}
