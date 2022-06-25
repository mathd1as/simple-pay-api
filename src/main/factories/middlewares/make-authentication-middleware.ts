import { AuthenticationMiddleware } from '@/application/middlewares/authentication-middleware'
import { JwtTokenHandler } from '@/infra/jwt/jwt-token-handler'

export const makeAuthenticationMiddleware = (): AuthenticationMiddleware => {
  return new AuthenticationMiddleware(new JwtTokenHandler('secret'))
}
