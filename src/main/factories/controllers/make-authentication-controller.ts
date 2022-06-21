import { AuthenticationController } from '@/application/controllers/authentication-controller'
import { makeAuthenticationService } from '@/main/factories/services/make-authentication-service'

export const makeAuthenticationController = (): AuthenticationController => {
  return new AuthenticationController(makeAuthenticationService())
}
