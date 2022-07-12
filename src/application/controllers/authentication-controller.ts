import { AuthenticationService } from '@/data/services/authentication-service'
import { AuthenticationError } from '@/domain/errors/authentication-error'
import { AuthenticationDTO } from '@/application/dtos/authentication-dto'

import { badRequest, ok, HttpResponse, serverError } from '../helpers'
import { Controller } from './controller'

type HttpRequest = {
  body: AuthenticationDTO
}
export class AuthenticationController extends Controller {
  constructor (private readonly authenticationService: AuthenticationService) {
    super()
  }

  async perform (params: HttpRequest): Promise<HttpResponse> {
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
