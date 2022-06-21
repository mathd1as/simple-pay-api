import { AuthenticationService } from '@/data/services/authentication-service'
import { JwtTokenHandler } from '@/infra/jwt/jwt-token-handler'

export const makeAuthenticationService = (): AuthenticationService => {
  return new AuthenticationService(new JwtTokenHandler('SECRET_VAR'))
}
