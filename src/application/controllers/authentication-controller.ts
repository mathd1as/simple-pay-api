import { AuthenticationService } from '@/data/services/authentication-service'
import { AuthenticationError } from '@/domain/errors/authentication-error'

import { badRequest, ok, HttpResponse, serverError } from '../helpers'

type HttpRequest = {
  body: {
    email: string
    password: string
  }
}
export class AuthenticationController {
  constructor (private readonly authenticationService: AuthenticationService) {}

  async handle (params: HttpRequest): Promise<HttpResponse> {
    const { email, password } = params.body
    if (email === '' || email === undefined) return badRequest(new Error('empty email field'))
    try {
      const result = await this.authenticationService.exec({ email, password })
      return ok(result)
    } catch (error) {
      console.log(error)
      if (error instanceof AuthenticationError) {
        return badRequest(error)
      }
      return serverError(error)
    }
  }
}
